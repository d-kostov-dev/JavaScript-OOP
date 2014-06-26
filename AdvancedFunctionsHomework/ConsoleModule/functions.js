var specialConsole = (function specialConsole() {
    function processInput() {
        var regExp,
            inputText = arguments[0];

        if (arguments.length > 1) {
            for (var i = 0, len = arguments.length; i < len; i++) {
                regExp = new RegExp("{(" + i + ")}", 'g');
                inputText = inputText.replace(regExp, arguments[i + 1]);
            }
        }

        return inputText.toString();
    }

    function writeLine() {
        var input = processInput.apply(null, arguments);
        console.log(input);
    }

    function writeError() {
        var input = processInput.apply(null, arguments);
        console.error(input);
    }

    function writeWarning() {
        var input = processInput.apply(null, arguments);
        console.warn(input);
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    };
}());