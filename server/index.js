// express server to handle requests and respond back with json data with body-parser and cors
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = 3001;
import { OpenAIApi, Configuration } from "openai";
const configuration = new Configuration({
    organization: "org-OcpugI3unh7ZeCGJ7nI4bflg",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
import OpenAI from '../src/components/OpenAI.tsx'
import React from 'react';
import { renderToString } from 'react-dom/server';

app.use(bodyParser.json());
app.use(cors());
app.post('/openai', async (req, res) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.prompt,
      max_tokens: 10,
      temperature: 0,
    });
    if(response.data.choices){
        res.json(response.data.choices[0].text);
    } else {
        res.json("Error");
    }
    });

app.get('/', (req, res) => {
    const html = renderToString("hello");
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>My App</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.__INITIAL_DATA__ = ${JSON.stringify(response)}
            </script>
            <script src="client.js"></script>
        </body>
    </html>
`);});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}  );