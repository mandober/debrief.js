/* Using Proxy to make an infinitely chainable API

Make an API which has an infinite number of methods, and when you
finally call one of those it'll return everything you chained.

This could be useful, for example, in making a fluent API that constructs URLs for web requests,
or maybe some kind of Test Assertion framework that chains together English words to make readable
assertions, kind of like Chai.

For this we need to hook into [[Get]], and push the retrieved prop into an array.
The Proxy will wrap a function which returns the Array of all
retrieved props and empty the array, so it can be re-used.

We'll also hook into [[HasProperty]] because we want to demonstrate to our users that any property exists.

*/
function urlBuilder(domain) {
    var parts = [];
    var proxy = new Proxy(
        function () {
            var returnValue = domain + '/' + parts.join('/');
            parts = [];
            return returnValue;
        }, {
            has: function () {
                return true;
            },
            get: function (object, prop) {
                parts.push(prop);
                return proxy;
            },
    });
    return proxy;
}

//! alert
var google = urlBuilder('http://google.com');

//? query
google.search.products.bacon.and.eggs() === 'http://google.com/search/products/bacon/and/eggs'; /*?*/

//* statement
