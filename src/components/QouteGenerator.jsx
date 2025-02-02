import { quoteMaker } from './QuoteCreation';
import { useState } from 'react';

const QuoteGenerator = ({ quoteToPass, isLoaded }) => {
    
    const [ quoteLoaded, setQuoteLoaded] = useState(true);

    const handleQuoteRequest = async () => {
        setQuoteLoaded(false)
        isLoaded(false)
        try {
            const quote = await quoteMaker();
            quoteToPass(quote)
        } catch (error) {
            console.error('Error fetching quote.. ', error)
        } finally {
            setQuoteLoaded(true)
            isLoaded(true)
        }
    }

    return (
        <button 
            id="new-quote" 
            onClick={handleQuoteRequest}
            disabled={!quoteLoaded}
        >
            {quoteLoaded ? "New Quote" : "waiting.."}
        </button>

    )
}
  

export default QuoteGenerator;