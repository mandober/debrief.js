'use strict';

function prom(modURL) {
    return new Promise(function executor(resolve, reject) {
        var script = document.createElement('script');
        script.src = modURL;
        script.type = 'text/javascript';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

prom('mod_tools.js')
    .then(function () {
        console.log('tools.isInt(12.33) -> result:', tools.isInt(12.33));
        console.log('tools.isInt(12.) -> result:', tools.isInt(12.));
        return prom('mod_typo.js');
    })
    .then(function () {
        let typo = tools.types.typo;
        console.log('typo(12.4)', typo(12.4));
        console.log('typo(null)', typo(null));
    })
    .catch(console.log);

