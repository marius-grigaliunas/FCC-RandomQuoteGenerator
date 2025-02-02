import { useEffect, useState } from 'react' 
import QuoteGenerator from './components/QouteGenerator';
import { randomQuote, quoteMaker }  from './components/QuoteCreation'
//import quoteMaker from './components/QuoteCreation';
import ShareBar from './components/Sharebar';
import QuoteField from './components/QuoteField';
import "./App.css"

function App() {

  const [ quote, setQuote ] = useState(randomQuote)
  const [ quoteLoaded, setQuoteLoaded] = useState(true)

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
        <div id='quote-field'>
          <QuoteField quoteToRender={quote} />
        </div>
        <div id='controls'>
          <QuoteGenerator 
            quoteToPass={setQuote} 
            isLoaded={setQuoteLoaded} 
          />
          <ShareBar 
            quoteToPost={`${quote.quote}\n-${quote.author}`} 
            disabled ={quoteLoaded}
          />
        </div>
      </section>
    </>
  )
}

export default App
