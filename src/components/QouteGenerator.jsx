import PropTypes from 'prop-types';
import quoteMaker from './QuoteCreation';

function QuoteGenerator({ setQuote }) {
    const getQuote = () => {
        setQuote(quoteMaker())
    }

    return (
        <div>
            <button onClick={getQuote}>New quote</button>
        </div>
    );
};

QuoteGenerator.propTypes = {
    setQuote: PropTypes.func.isRequired
  };
  

export default QuoteGenerator;