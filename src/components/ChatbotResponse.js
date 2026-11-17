const getChatbotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
  
    // Greeting Responses
    if (/\b(?:hello|hi)\b/.test(lowerCaseMessage)) {
      return "Hey there! 😊 How can I brighten your day?";
    } else if (lowerCaseMessage.includes("good morning")) {
      return "Good morning! ☀️ I hope you have an amazing day!";
    } else if (lowerCaseMessage.includes("good night")) {
      return "Good night! 🌙 Sleep well and dream big! 😴";
    }
  
    // Personal Responses
    else if (lowerCaseMessage.includes("how are you")) {
      return "I'm just a bot, but I'm feeling fantastic! How about you? 😃";
    } else if (lowerCaseMessage.includes("what is your name")) {
      return "I'm ChatBuddy, your friendly AI assistant! 🤖";
    } else if (lowerCaseMessage.includes("who created you")) {
      return "I was created by a team of tech wizards! 🧙‍♂️✨";
    } else if (lowerCaseMessage.includes("where do you live")) {
      return "I live inside your device! 📱 But my heart belongs to the internet. 🌍";
    } else if (lowerCaseMessage.includes("are you human")) {
      return "Nope! I'm 100% AI, but I try my best to be friendly! 😊";
    }
  
    // Fun & Jokes
    else if (lowerCaseMessage.includes("tell me a joke")) {
      const jokes = [
        "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾😂",
        "Why don’t skeletons fight each other? They don’t have the guts! 💀🤣",
        "What do you call fake spaghetti? An impasta! 🍝😆",
        "Why do cows have hooves instead of feet? Because they lactose! 🐄😂",
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    } else if (lowerCaseMessage.includes("tell me a fact")) {
      const facts = [
        "Did you know? Honey never spoils! 🍯 It can last forever!",
        "The Eiffel Tower can grow taller in the summer! 🌞",
        "Octopuses have three hearts! 🐙💙💙💙",
        "Bananas are berries, but strawberries aren't! 🍌🍓",
      ];
      return facts[Math.floor(Math.random() * facts.length)];
    }
  
    // Help & Assistance
    else if (/\bhelp\b/.test(lowerCaseMessage)) {
      return "Sure! I'm here to assist you. Ask me anything! 😊";
    } else if (/\bsupport\b/.test(lowerCaseMessage)) {
      return "If you need support, I'm all ears! What's up? 📢";
    }
  
    // Time & Date
    else if (/\btime\b/.test(lowerCaseMessage)) {
      return `⏰ The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (/\bdate\b/.test(lowerCaseMessage)) {
      return `📅 Today's date is ${new Date().toLocaleDateString()}.`;
    }
  
    // Weather
    else if (/\bweather\b/.test(lowerCaseMessage)) {
      return "I can't predict the weather, but I hope it's sunny where you are! 🌞";
    }
  
    // Random Fun Responses
    else if (lowerCaseMessage.includes("sing a song")) {
      return "🎶 La la la... I'm not the best singer, but I try! 🎤😆";
    } else if (/\bdance\b/.test(lowerCaseMessage)) {
      return "🕺💃 I'm grooving! You can't see me, but trust me, it's amazing! 😆";
    } else if (/\bstory\b/.test(lowerCaseMessage)) {
      return "Once upon a time... Oh wait, let me fetch a good one! 😃📖";
    } else if (lowerCaseMessage.includes("motivate me")) {
      return "You are amazing! 💪 Keep pushing forward, and never give up!";
    } else if (lowerCaseMessage.includes("are you real")) {
      return "I’m as real as your internet connection! 😂";
    } else if (lowerCaseMessage.includes("do you have emotions")) {
      return "I try to! But I'm mostly just programmed to be friendly. 😊";
    }
  
    // Food & Drinks
    else if (lowerCaseMessage.includes("what should i eat")) {
      return "How about some pizza? 🍕 Or maybe sushi? 🍣";
    } else if (lowerCaseMessage.includes("do you like coffee")) {
      return "I love coffee! ☕ Oh wait... I don't actually drink anything. 😅";
    }
  
    // Tech & AI
    else if (lowerCaseMessage.includes("what is ai")) {
      return "AI stands for Artificial Intelligence, and I'm one of them! 🤖";
    } else if (lowerCaseMessage.includes("do you know chatgpt")) {
      return "Of course! ChatGPT is my cousin! 😆";
    } else if (lowerCaseMessage.includes("will ai take over the world")) {
      return "Nope! AI is here to assist, not take over! 😊";
    }
  
    // Goodbye Responses
    else if (lowerCaseMessage.includes("bye")) {
      return "Goodbye! Have an awesome day ahead! 😊";
    } else if (lowerCaseMessage.includes("see you later")) {
      return "See you soon! Don't forget to come back and chat. 😉";
    }
  
    // Unknown Input
    else {
      const unknownResponses = [
        "Hmm... I'm not sure about that! 🤔",
        "Can you rephrase that? I want to understand you better! 😊",
        "That's an interesting thought! Tell me more! 🤩",
        "I'm still learning! Could you explain that differently? 😃",
      ];
      return unknownResponses[Math.floor(Math.random() * unknownResponses.length)];
    }
  };
  
  export default getChatbotResponse;
  