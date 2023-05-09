const fetch = require('isomorphic-fetch');

const pickHeaders = (headers: Headers, keys: (string | RegExp)[]): Headers => {
  const picked = new Headers();
  for (const key of headers.keys()) {
    if (keys.some((k) => (typeof k === "string" ? k === key : k.test(key)))) {
      const value = headers.get(key);
      if (typeof value === "string") {
        picked.set(key, value);
      }
    }
  }
  return picked;
};

const CORS_HEADERS: Record<string, string> = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "Content-Type, Authorization",
};


// exports.handler = async (req) =>  {
//   console.log(req)
//   if (req.method === "OPTIONS") {
//     return new Response(null, {
//       headers: CORS_HEADERS,
//     });
//   }
//
//   const { pathname, search } = req.nextUrl ? req.nextUrl : new URL(req.url);
//   const url = new URL(pathname + search, "https://api.openai.com").href;
//   const headers = pickHeaders(req.headers, ["content-type", "authorization"]);
//
//   const res = await fetch(url, {
//     body: req.body,
//     method: req.method,
//     headers,
//   });
//
//   const resHeaders = {
//     ...CORS_HEADERS,
//     ...Object.fromEntries(
//         pickHeaders(res.headers, ["content-type", /^x-ratelimit-/, /^openai-/])
//     ),
//   };
//
//   return new Response(res.body, {
//     headers: resHeaders,
//   });
// }
exports.handler = async (event) => {
  console.log(event)
  // if (event.httpMethod === "OPTIONS") {
  //   return new Response(null, {
  //     headers: CORS_HEADERS,
  //   });
  // }
  // console.log(event.httpMethod)
  return {
    statusCode: 200,
    body: "test ok",
  };
  //
  // const url = new URL(event.path +"?"+event.rawQuery, "https://api.openai.com").href;
  // console.log(url)
  // const headers = pickHeaders(event.headers, ["content-type", "authorization"]);
  //
  // const res = await fetch(url, {
  //   body: event.body,
  //   method: event.httpMethod,
  //   headers,
  // });
  //
  // const resHeaders = {
  //   ...CORS_HEADERS,
  //   ...Object.fromEntries(
  //       pickHeaders(res.headers, ["content-type", /^x-ratelimit-/, /^openai-/])
  //   ),
  // };
  //
  // return new Response(res.body, {
  //   headers: resHeaders,
  // });
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
//     'https://api.openai.com/v1/completions',
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
