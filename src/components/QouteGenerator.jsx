import PropTypes from 'prop-types';
import { quoteMaker } from './QuoteCreation';

function QuoteGenerator({ setQuote }) {
    const handleQuoteRequest = async () => {
        const quote = await quoteMaker();
        setQuote(quote);
    }

    return (
        <div className='newqoute-button-container'>
            <button id="new-qoute" onClick={handleQuoteRequest}>New quote</button>
        </div>
    );
};

QuoteGenerator.propTypes = {
    setQuote: PropTypes.func.isRequired
  };
  

export default QuoteGenerator;