// // In api/weather.ts

// import { IncomingMessage, ServerResponse } from 'http';
// import axios from 'axios';
// import { NowRequest, NowResponse } from '@vercel/node';

// export default async function handler(req: NowRequest, res: NowResponse) {
//   try {
//     const { place } = req.query;

//     // Make a GET request to the OpenWeatherMap API with the provided place and API key
//     const { data } = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
//     );

//     // If the request is successful, respond with the fetched data
//     res.status(200).json(data);
//   } catch (error) {
//     // If an error occurs during the request, respond with a 500 Internal Server Error
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
