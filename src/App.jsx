import { useEffect, useState } from 'react' 
import QuoteGenerator from './components/QouteGenerator';
import { randomQuote, quoteMaker }  from './components/QuoteCreation'
//import quoteMaker from './components/QuoteCreation';
import ShareBar from './components/Sharebar';
import "./App.css"

function App() {
  const [quote, setQuote] = useState(randomQuote);

  /*useEffect(() => {
    const handleQuoteRequest = async () => {
      const quote = await quoteMaker();
      setQuote(quote);
  }

    handleQuoteRequest();
  }, []);*/

  return (
    <>
      <section id="quote-box">
        <div id="text">
          {quote.quote}
        </div>
        <div id='author'>
          -{quote.author}
        </div>
        <div className='controls'>
          <QuoteGenerator setQuote={setQuote} />
          <ShareBar />
        </div>
      </section>
    </>
  )
}

export default App
