import React from 'react';


const Button = (props) => (
    <div>
        <h3 id="text">{props.selectedQuote.quote} - <span id="author">{props.selectedQuote.author}</span></h3>
        <div style={{display: 'flex', justifyContent: 'space-evenly',}}>
            <a id="tweet-quote" target="_blank" href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}`)}>
                Twitter</a>
            <button id="new-quote" onClick={props.nextQuote}>Next Quote</button>
        </div>
    </div>
);


export default Button;