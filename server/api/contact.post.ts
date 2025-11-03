import { defineEventHandler, readBody, createError } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, phone, goal, message, consent } = body || {}

  if (!name || !email || !phone || consent !== true) {
    throw createError({ statusCode: 400, statusMessage: 'Dados inválidos: nome, e-mail, whatsapp e consentimento são obrigatórios.' })
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT || 587)
  const secure = port === 465
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM || user
  const to = process.env.CONTACT_TO || 'victormanuell2022@gmail.com'

  if (!user || !pass) {
    throw createError({ statusCode: 500, statusMessage: 'SMTP não configurado. Defina SMTP_USER e SMTP_PASS nas variáveis de ambiente.' })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  })

  const subject = 'Novo Lead – Consultoria Gratuita (Team Victor)'
  const text = `Novo lead recebido:\n\n` +
    `Nome: ${name}\n` +
    `E-mail: ${email}\n` +
    `WhatsApp: ${phone}\n` +
    `Objetivo: ${goal || 'não informado'}\n` +
    `Mensagem: ${message || '—'}\n` +
    `Consentimento LGPD: ${consent ? 'Sim' : 'Não'}`

  const html = `
    <div style="font-family:Arial, sans-serif; line-height:1.6; color:#111;">
      <h2 style="margin:0 0 12px;">Novo lead – Consultoria Gratuita</h2>
      <p>Você recebeu um novo contato pelo site.</p>
      <table style="border-collapse:collapse; width:100%;">
        <tbody>
          <tr><td style="padding:8px; border:1px solid #eee; font-weight:600;">Nome</td><td style="padding:8px; border:1px solid #eee;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee; font-weight:600;">E-mail</td><td style="padding:8px; border:1px solid #eee;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee; font-weight:600;">WhatsApp</td><td style="padding:8px; border:1px solid #eee;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee; font-weight:600;">Objetivo</td><td style="padding:8px; border:1px solid #eee;">${escapeHtml(goal || 'não informado')}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee; font-weight:600;">Mensagem</td><td style="padding:8px; border:1px solid #eee; white-space:pre-line;">${escapeHtml(message || '—')}</td></tr>
          <tr><td style="padding:8px; border:1px solid #eee; font-weight:600;">Consentimento LGPD</td><td style="padding:8px; border:1px solid #eee;">${consent ? 'Sim' : 'Não'}</td></tr>
        </tbody>
      </table>
      <p style="margin-top:16px; font-size:12px; color:#666;">Enviado automaticamente pelo site Team Victor.</p>
    </div>
  `

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject,
    text,
    html
  })

  return { success: true }
})

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}