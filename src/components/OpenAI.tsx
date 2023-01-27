// create a react component to get an input from the user and send a fetch request to the server at localhost:3001 and gets back the json form in display.message and displays it on the page
const React = require('react');
const { useState } = require('react');
require("../App.css")

interface Props {
  handleSubmit: (input: string) => void;
  response: { message: string } | null;
}

const OpenAI: React.FC<Props> = ({handleSubmit, response}) => {
  const [input, setInput] = useState('');

  const reqData = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(input);
  }; 

  return (
    <div className="App">
      <form onSubmit={reqData}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
{response && <div>{response.message}</div>}
    </div>
  );
}

export default OpenAI;