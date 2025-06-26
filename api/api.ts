import { ChatbotMessage } from '@/components/ChatbotMessageBubble';
import { Message } from '@/components/ChatBox';

const BASE_URL = 'http://localhost:8080';

// Function to fetch data from the server
export const getChatbotResponseFromServer = async (
  messages: Message[],
): Promise<ChatbotMessage> => {
  try {
    const response = await fetch(`${BASE_URL}/api/chatbot`, {
      method: 'POST',
      body: JSON.stringify(messages),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: ChatbotMessage = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
