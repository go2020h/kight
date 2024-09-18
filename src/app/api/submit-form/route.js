import axios from 'axios'

const WEBHOOK_URL = process.env.WEBHOOK_URL

export async function POST(request) {
  try {
    const formData = await request.json()

    // Webhookにデータを送信
    const response = await axios.post(WEBHOOK_URL, formData)

    if (response.status !== 200) {
      throw new Error('Webhook送信に失敗しました')
    }

    return new Response(JSON.stringify({ message: 'フォームを送信しました。' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return new Response(JSON.stringify({ message: 'フォームの送信に失敗しました。' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
