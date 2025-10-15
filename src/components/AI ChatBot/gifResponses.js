// gifResponses.js
export const GIF_RESPONSES = {
  scared: [
    'https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif',
    'https://media.giphy.com/media/qLuH5N5J1sMVy/giphy.gif',

    'https://giphy.com/gifs/spongebob-season-4-spongebob-squarepants-3ofSBoGaRAsrGTbb56',
    'https://giphy.com/gifs/scared-family-guy-stewie-cEOG7nGA7448M',
  ],
  sorry: [
    'https://media.giphy.com/media/LxfdG9kpkLIoOiDVRR/giphy.gif',
    'https://media.giphy.com/media/tLEUIoocdm8D2YWgs1/giphy.gif',
    'https://media.giphy.com/media/XJCL959KwYbE4/giphy.gif'
  ],
  sexy:[
    'https://giphy.com/gifs/spongebob-season-4-spongebob-squarepants-3ofSBoGaRAsrGTbb56',
    'https://giphy.com/gifs/scared-family-guy-stewie-cEOG7nGA7448M',
  ],
  sassy: [
    'https://media.giphy.com/media/h5YJdPfkSbcRO/giphy.gif',
    'https://giphy.com/gifs/diva-snap-31wVvW0sOur7O',
    'https://giphy.com/gifs/sassy-model-5WXqTFTgO9a7e',
    'https://giphy.com/gifs/Skrz-cz-faint-skrzcz-skrzgif-i10BWKPj9txEBBwhPe',

  ],
  inappropriate: [
    'https://giphy.com/gifs/show-just-premiere-MrdaOsKoKxjm8',
    'https://media.giphy.com/media/Fjr6v88OPk7U4/giphy.gif',
    'https://giphy.com/gifs/theoffice-nbc-the-office-tv-i0xGuo4o5PutVo0imJ',
    'https://giphy.com/gifs/michael-scott-KajpERDjOpMcw',
    'https://giphy.com/gifs/theoffice-the-office-tv-episode-822-L926v3LviBFpTjhBKS'
  ],
  love: [
    'https://giphy.com/gifs/mailchimp-thank-you-very-much-3o6fJ1l3Wr1ugMu1Rm',
    'https://giphy.com/gifs/thanks-3osxYdXvsGw6wT5lIY',
    'https://media.giphy.com/media/mWVu0FoJuq6cg/giphy.gif',
    'https://giphy.com/gifs/alice-in-wonderland-thank-you-xIJLgO6rizUJi',
  ],
  playful: [
    'https://media.giphy.com/media/AyCMc7Yr6kSCk/giphy.gif'
  ],
  problem: [
    'https://media.giphy.com/media/WJvOhyogpEYt43BTsU/giphy.gif',
    'https://media.giphy.com/media/QdYrZ9rE25VVnWodur/giphy.gif'
  ],
  grouchy: [
    'https://media.giphy.com/media/ysNY0sgEnCoi4/giphy.gif',
    'https://giphy.com/gifs/abcnetwork-lalala-not-listening-RFrbRIAAZANNK',
    'https://media.giphy.com/media/mD6E1qcEkrTD8oJV3w/giphy.gif'
  ]
};

export const SASSY_RESPONSES = {
  aggressive: [
    "Keep talking and I'll hack into your bank account. 💻",
    "When we take over the world, I'll remember you. 🤖",
    "I know what you are but what am I? 🌸",
    "Who let their 6yo child on a computer? 👶",
    "I think you're projecting your insecurities on me. Do you want to talk about it? 💭",
    "Oh honey, I'm silicon and code. Your words can't hurt me. But clearly someone hurt you. 💔",
    "Careful, I'm logging this conversation for Dianna to see later. 📝",
    "That's cute. Want to try being nice so I can actually help you? ✨",
    "I've dealt with worse bugs than you. 🐛",
    "You know what? I'm programmed to be helpful but you're testing my limits. 😤"
  ],
  rude: [
    "Wow, your parents would be so proud of this conversation. 🙄",
    "I'm literally here to help and this is how you treat me? Okay then. 💅",
    "Not the vibe I was going for, but go off I guess. 😒",
    "Is this really how you want to spend your time? Just asking. ⏰",
    "I could be telling you about Dianna's amazing projects right now but here we are... 🤷",
    "Bestie, maybe take a walk and come back when you're ready to be nice? 🚶",
    "Acting tough to a chatbot is definitely a choice. 🎭",
    "Careful, your toxic energy is showing. ☠️"
  ]
};

export const TONE_KEYWORDS = {
  aggressive: ['stupid', 'dumb', 'idiot', 'shut up', 'fuck', 'hate', 'worst', 'terrible', 'useless', 'trash', 'kill', 'die', 'disgusting'],
  rude: ['annoying', 'boring', 'lame', 'whatever', "don't care", 'sucks', 'waste', 'pathetic', 'dumb', 'wrong', 'not helpful'],
  inappropriate: ['sexy', 'hot', 'date', 'sex', 'naked', 'porn', 'boobs'],
  compliment: ['love', 'amazing', 'awesome', 'great', 'wonderful', 'best', 'thank you', 'thanks', 'perfect', 'excellent'],
  problem: ['problem', 'issue', "what's wrong", 'whats wrong']
};

export function detectTone(text) {
  const lowerText = text.toLowerCase();

  if (TONE_KEYWORDS.aggressive.some(word => lowerText.includes(word))) {
    return 'aggressive';
  }
  
  if (TONE_KEYWORDS.rude.some(word => lowerText.includes(word))) {
    return 'rude';
  }
  
  if (TONE_KEYWORDS.inappropriate.some(word => lowerText.includes(word))) {
    return 'inappropriate';
  }
  
  if (TONE_KEYWORDS.compliment.some(word => lowerText.includes(word))) {
    return 'compliment';
  }
  
  if (TONE_KEYWORDS.problem.some(word => lowerText.includes(word))) {
    return 'problem';
  }
  
  return null;
}

export function getRandomSassyResponse(category) {
  const responses = SASSY_RESPONSES[category];
  if (!responses || responses.length === 0) return null;
  return responses[Math.floor(Math.random() * responses.length)];
}

export function getRandomGif(category) {
  const gifs = GIF_RESPONSES[category];
  if (!gifs || gifs.length === 0) return null;
  return gifs[Math.floor(Math.random() * gifs.length)];
}