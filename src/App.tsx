// create a react component to get an input from the user and send a fetch request to the server at localhost:3001 and gets back the json form in display.message and displays it on the page
import React, { useState } from 'react';
import { hydrate } from 'react-dom';
import axios from 'axios';
import OpenAI from './components/OpenAI';
function App() {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (input: string) => {
    try {
        const res = await axios.post('/openai', input);
        setResponse(res.data);
    } catch (error) {
        console.error(error);
    }
}

return (
  <OpenAI handleSubmit={handleSubmit} response={response} />
)
}

hydrate(<App />, document.getElementById('root'));