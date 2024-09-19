import { useEffect, useState } from 'react' 
import QuoteGenerator from './components/QouteGenerator';
import quoteMaker from './components/QuoteCreation';

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const handleQuoteRequest = async () => {
      const quote = await quoteMaker();
      setQuote(quote);
  }

    handleQuoteRequest();
  }, []);

  return (
    <>
      <section id="quote-box">
        <div id="text">
          {quote.quote}
        </div>
        <div id='author'>
          -{quote.author}
        </div>
        <QuoteGenerator id="new-qoute" setQuote={setQuote} />
        <a id='tweet-qoute'>
          Twitter
        </a>
      </section>
    </>
  )
}

export default App
