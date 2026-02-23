import nodemailer from "nodemailer"

const RECIPIENT_EMAIL = "ellahairova@gmail.com"

type ApplicationPayload = {
  name?: string
  phone?: string
  email?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ApplicationPayload

    const name = (body.name || "").trim()
    const phone = (body.phone || "").trim()
    const email = (body.email || "").trim()

    if (!name || !phone || !email) {
      return Response.json(
        { ok: false, message: "Пожалуйста, заполните имя, телефон и email." },
        { status: 400 },
      )
    }

    const gmailUser = process.env.GMAIL_USER || RECIPIENT_EMAIL
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailAppPassword) {
      return Response.json(
        {
          ok: false,
          message:
            "Форма настроена не до конца: отсутствует GMAIL_APP_PASSWORD на сервере.",
        },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    await transporter.sendMail({
      from: `"Madeira Retreat" <${gmailUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: "Новая заявка на ретрит (Мадейра)",
      text: [
        "Новая заявка с сайта",
        "",
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        `Email: ${email}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#222;">
          <h2 style="margin:0 0 12px;">Новая заявка с сайта (ретрит Мадейра)</h2>
          <p style="margin:0 0 6px;"><strong>Имя:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 6px;"><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
          <p style="margin:0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch (error) {
    console.error("Application form error:", error)
    return Response.json(
      {
        ok: false,
        message: "Не удалось отправить заявку. Попробуйте ещё раз через минуту.",
      },
      { status: 500 },
    )
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

