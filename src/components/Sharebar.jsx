const ShareBar = ({ quoteToPost, disabled }) => {
    const postText = encodeURIComponent(quoteToPost);
    const postURI = `https://twitter.com/intent/tweet?text=${postText}`;
    
    return (
        <a 
            id="tweet-quote" 
            className="twitter-share-button" 
            href={postURI} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{pointerEvents: disabled ? 'auto' : 'none', opacity: disabled ? 1 : 0.5}}    
        >
            Tweet
        </a>
        
    );
}

export default ShareBar;