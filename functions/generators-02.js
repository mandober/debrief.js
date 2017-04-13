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

let it = createQuoteGetter();
it.next().value
    .then(res => it.next(res).value)
    .then(res => it.next(res).value)
    .then(quote => console.log(quote))
    .catch(err => console.log(err));

/*
or, in this case just:
*/

function* createQuoteGetter() {
    let res = yield fetch(url);
    yield (res.json());
}

let it = createQuoteGetter();
it.next().value
    .then(res => it.next(res).value)
    .then(res => { console.log(`${res.quoteText}\n -- ${res.quoteAuthor}`); })
    .catch(err => console.log(err));