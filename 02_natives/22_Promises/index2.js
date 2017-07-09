'use strict';

new Promise(function executor(resolve, reject) {
    var script = document.createElement('script');
    script.src = 'mod_tools.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
})
.then(function () {
    console.log('tools.isInt(12.33) -> result:', tools.isInt(12.33));
    console.log('tools.isInt(12.) -> result:', tools.isInt(12.));
})
.catch(console.log);
