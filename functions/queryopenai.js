const fetch = require('isomorphic-fetch');
// const pickHeaders = (headers: Headers, keys: (string | RegExp)[]): Headers => {
//   const picked = new Headers();
//   for (const key of headers.keys()) {
//     if (keys.some((k) => (typeof k === "string" ? k === key : k.test(key)))) {
//       const value = headers.get(key);
//       if (typeof value === "string") {
//         picked.set(key, value);
//       }
//     }
//   }
//   return picked;
// };
//
// const CORS_HEADERS: Record<string, string> = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "Content-Type, Authorization",
// };

exports.handler = async (event) => {
  console.log(event)
  let url = "https://api.openai.com"+event.path;
  console.log(url)
  // const res = await fetch("https://api.openai.com/v1/chat/completions", {
  const res = await fetch(url, {
    body: event.body,
    method: event.httpMethod,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_OPEN_AI_API_KEY,
    },
  });
  console.log(res)
  const data = await res.json();
  console.log(data)
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

// exports.handler = async (event) => {
//   const { newMessage, messageHistory } = JSON.parse(event.body);
//
//   const intro =
//     'The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.';
//   const prompt = messageHistory
//     .map((message) => {
//       return message.sender === 'me'
//         ? `Human: ${message.text}`
//         : `AI: ${message.text}`;
//     })
//     .join('\n');
//
//   const query = intro + '\n' + prompt + '\nHuman: ' + newMessage + '\nAI:';
//
//   const DEFAULT_PARAMS = {
//     model: 'text-davinci-002',
//     temperature: 0.7,
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//   };
//   const params_ = { ...DEFAULT_PARAMS, prompt: query };
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer ' + process.env.REACT_APP_OPEN_AI_API_KEY,
//     },
//     body: JSON.stringify(params_),
//   };
//
//   const response = await fetch(
//     'https://api.openai.com/v1/chat/completions',
//     requestOptions
//   );
//   console.log(
//     '🚀 ~ file: queryopenai.js:40 ~ exports.handler= ~ response:',
//     response
//   );
//   const data = await response.json();
//   console.log('🚀 file: queryopenai.js:41 ~ exports.handler= ~ data:', data);
//
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ result: data.choices[0].text || {} }),
//   };
// };
