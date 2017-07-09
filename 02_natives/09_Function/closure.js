// closure
(function () {
    var secret = 0;

    var getValue = function () {
        return secret;
    };

    var setValue = function (v) {
        if (typeof v === "number") {
            secret = v;
        }
    };

    return api = { s: setValue, g: getValue };
}())
api.s(42);
api.g(); // 42