import PropTypes from 'prop-types';
import { quoteMaker } from './QuoteCreation';

function QuoteGenerator({ setQuote }) {
    const handleQuoteRequest = async () => {
        const quote = await quoteMaker();
        setQuote(quote);
    }

    return (
        <button id="new-quote" onClick={handleQuoteRequest}>New quote</button>
    );
};

QuoteGenerator.propTypes = {
    setQuote: PropTypes.func.isRequired
  };
  

export default QuoteGenerator;