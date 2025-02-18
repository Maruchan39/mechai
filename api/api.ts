import { ChatbotMessage } from "@/components/ChatbotMessageBubble";
import { UserMessage } from "@/components/UserMessageBubble";
  
  const BASE_URL = 'http://localhost:8080';
  
  // Function to fetch data from the server
  export const getChatbotResponseFromServer = async (userMessage: UserMessage): Promise<ChatbotMessage> => {
    
    try {
      const response = await fetch(`${BASE_URL}/api/chatbot`, {
        method: 'POST',
        body: JSON.stringify(userMessage),
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