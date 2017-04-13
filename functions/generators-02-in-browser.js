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

var myHeaders = new Headers();
var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'no-cors',
    cache: 'default'
};

function* createQuoteGetter() {
    var res = yield fetch(url, myInit);
    var quote = yield res.json();
    return `${quote.quoteText}\n -- ${quote.quoteAuthor}`;
}

var it = createQuoteGetter();
it.next().value
    .then(res => it.next(res).value)
    .then(res => it.next(res).value)
    .then(quote => console.log(quote))
    .catch(err => console.log(err));