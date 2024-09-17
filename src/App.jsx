import { useState } from 'react'
import QuoteGenerator from './components/QouteGenerator';

function App() {
  const [qoute, setQoute] = useState({qoute: "laba diena", author: "M."});

  return (
    <>
      <section id="quote-box">
        <div id="text">
          {qoute.qoute}
        </div>
        <div id='author'>
          -{qoute.author}
        </div>
        <QuoteGenerator id="new-qoute" setQoute={setQoute} />
        <a id='tweet-qoute'>
          Twitter
        </a>
      </section>
    </>
  )
}

export default App
