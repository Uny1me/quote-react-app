import React from 'react';
import axios from 'axios'

const QuoteApp = () => {

    // Function to get Quote with axios
    const newQuote = () => {

        // Getting a number with Javascript returns a decimal 0.number, multiplying with ten gives you a number

        var randNum = (Math.random() * 10);

        // convert number to a string, then extract the first digit
        var strNum = String(randNum).charAt(0);

        // convert the first digit back to an integer
        var numStr = Number(strNum);

        console.log(numStr)

        axios
            .get('https://type.fit/api/quotes', {
                timeout: 5000
            })
            // .then(res => showOutput(res))
            .then(res => {
                document.getElementById('text').innerText = res.data[numStr].text
                document.getElementById('author').innerText = res.data[numStr].author
                console.log(res.data)
            })
            .catch(err => console.error(err));
    }

    const tweetQuote = () => {
        const quote = document.getElementById('text').innerText
        const author = document.getElementById('author').innerText


        document.getElementById('tweet-quote').setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author)
        );
    }


    return (
        <div id="quote-box" className="container d-flex flex-column align-items-start justify-content-center text-justify" style={{
            width: '300px',
        }}>

            <p id="text" style={{
                color: " rgb(254,254,254)",
                fontSize: '29px',
                width: 'auto'
            }} ><i className="fa fa-quote-left text-white mt-3" style={{
                fontSize: '15px',
                marginRight: '10px',
            }}></i>You don't get to choose if you get hurt in this world, old man, but you do have some say in who hurts you.<i className="fa fa-quote-right text-white mt-3" style={{
                fontSize: '15px',
                marginLeft: '10px',
            }}></i></p>
            <p id="author" style={{
                fontStyle: 'italic',
                width: 'auto',
                fontSize: '20px',
                letterSpacing: '.9px'
            }}> - John Green </p>

            <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-primary bg-white border-none text-dark" id="new-quote" type="button" onClick={newQuote} style={{
                    border: '0',
                    marginTop: '10px',
                    padding: 'auto 3px'
                }}>NEW QUOTE</button>

                <a href="#" id="tweet-quote" onClick={tweetQuote} target="_blank">
                    <i className="fa fa-twitter text-white mt-3" style={{
                        fontSize: '20px',
                        marginLeft: '20px'
                    }}></i>
                </a>
            </div>
        </div>
    );
};

export default QuoteApp;