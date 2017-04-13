onmessage = function (e) {
    console.log('[worker] Message received from main script');
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    console.log('[worker] Posting message back to main script');
    postMessage(workerResult);
}