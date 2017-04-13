'use strict';

/*
http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json

{
    "quoteText": "blah-blah",
    "quoteAuthor": "Confucius",
    "senderName": "",
    "senderLink": "",
    "quoteLink": "http://forismatic.com/en/18dd2b805e/"
}

*/

const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const fetch = require('node-fetch');

function* createQuoteGetter() {
    // 3) fetch url
    // 4) pass it (as a promise) to main code; pause
    let res = yield fetch(url);
    // 8) res is here http-gzipped-response object, passed in from the main code
    console.log('response status: ' + res.status);

    // 9) json() that response
    // 10) pass the result of that operation (as a promise) to main code; pause
    let quote = yield res.json();
    // 14) quote is here nicely formatted JSON

    // 15) return the quote, as a promise (?!)
    return `${quote.quoteText}\n -- ${quote.quoteAuthor}`;
}

// 1) get back iterator from generator
let it = createQuoteGetter();

// 2) start generator
it.next().value
// 5) .value is a promise gotten back from `fetch(url)`
// {value: Promise, done: false}

    // 6) Resolve a promise
    // 7) When the promise is resolved i.e. when we get the http-gzipped-response object from API,
    // (res = http-gzipped-response object)
    // we shovel that response back into generator, thereby resuming it.
    .then(res => it.next(res).value)
    // 11) .value is again a promise gotten back from `res.json()`
    // {value: Promise, done: false}

    // 12) Resolve a promise
    // 13) When the promise is resolved i.e. when we get the nice JSON
    // we still shovel it back to generator (?!), thereby resuming it.
//.then(res => it.next(res).value)
    // 16) .value is again a promise gotten from generator with a simple `return`

    // 12-alt) we have the JSON we want here, so why not print the quote now
    // and leave the generator alone (in its paused state)
    .then(res => {
        //console.log(res);
        console.log(`${res.quoteText}\n -- ${res.quoteAuthor}`);
    })


    // 17) Resolve a promise; print the code finally
    //.then(quote => console.log(quote))

    // catch any failed promises
    .catch(err => console.log(err));
