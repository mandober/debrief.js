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
    let res = yield fetch(url);
    let quote = yield res.json();
    return `${quote.quoteText}\n -- ${quote.quoteAuthor}`;
}

/*
const it = createQuoteGetter();
it.next().value
    // this 2 lines can be improved, to become generic
    .then(res => it.next(res).value)
    .then(res => it.next(res).value)

    .then(quote => console.log(quote))
    .catch(err => console.log(err));
*/


/*
Improve the code: make next() calls generic
*/

// accepts a generator
const coroutine = (gen) => {
    // get iterator from generator
    const it = gen();

    // helper function to handle result gotten from generator
    const handle = (result) => {
        // if {done: true} check
        if (result.done) return Promise.resolve(result.value);
        // else
        return Promise
                .resolve(result.value)
                .then(res => handle(it.next(res)));
    };

    return handle(it.next());
};

const quoteFetcher = coroutine(createQuoteGetter);
quoteFetcher.then(quote => console.log(quote));


/*
or just `npm install co` module
delete `coroutine` function and replace calls to it with `co`

const co = require('co');
const quoteFetcher = co(createQuoteGetter);
quoteFetcher.then(quote => console.log(quote));

*/
