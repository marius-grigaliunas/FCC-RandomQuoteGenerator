import { useState } from 'react'
import QuoteGenerator from './components/QouteGenerator';'./components/QouteGenerator';

function App() {
  const [qoute, setQoute] = useState("random qoute");

  return (
    <>
      <section id="quote-box">
        <div id="text">
          {qoute}
        </div>
        <div id='author'>
          Shalava
        </div>
        <QuoteGenerator id="new-qoute" setQoute={setQoute} />
        <a id='tweet-qoute'>
          X
        </a>
      </section>
    </>
  )
}

export default App
