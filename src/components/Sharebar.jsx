const ShareBar = () => {
    return (
        <div className="share-bar">
            <div className="share-box twitter">
                <a id="tweet-quote">
                    <button className="twitter">
                        Twitter
                    </button>
                </a>
            </div>
            <div className="share-box linkedin">
                <a id="link-quote">
                    <button className="linkedin">
                        Linkedin
                    </button>
                </a>
            </div>
            <div className="share-box facebook">
                <a id="facebook-quote">
                    <button className="facebook">
                        Facebook
                    </button>
                </a>
            </div>
        </div>
    );
}

export default ShareBar;