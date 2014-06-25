//NOTE: I was not sure for the last task "Get elements by CSS selector" so i made all functions to work with Query Selector and also a css selector function :)

var domModule = (function domModule() {
    // Will not be visible after return
    var elementsBuffer = [],
        bufferSize = 100; 

    // Gets node and appends it to selector
    function appendChild(node, selector) {
        var parentNode = document.querySelector(selector);
        parentNode.appendChild(node);
    }

    // Gets the type of node to be created and appends it to selector.
    function craeteAndAppendChild(nodeToCreate, selector) {
        var newNode = document.createElement(nodeToCreate);

        // Using the already existing function
        appendChild(newNode, selector);
    }
    
    // Remove all items that are found in all selectors given
    function remove(selector, toRemove) {
        var parentNode = document.querySelectorAll(selector);

        // Remove for each parent
        for (var i = 0, iLen = parentNode.length; i < iLen; i++) {
            var currentNode = parentNode[i],
                nodesToRemove = currentNode.querySelectorAll(toRemove);

            // Remove every result
            for (var j = 0, jLen = nodesToRemove.length; j < jLen; j++) {
                currentNode.removeChild(nodesToRemove[j]);
            }
            
        }
    }

    // Add Event Listener to all found by selector
    function addHandler(selector, event, handler) {
        var elements = document.querySelectorAll(selector);

        for (var i = 0, len = elements.length; i < len; i++) {
            var currentElement = elements[i];
            currentElement.addEventListener(event,handler);
        }
    }

    // Append existing element to the buffer
    function appendToBuffer(node, selector) {
        // Save all elements to array of objects
        elementsBuffer.push({
            node: node,
            selector: selector
        });

        // Check if buffers is full
        if (elementsBuffer.length >= bufferSize) {
            // Append all nodes to DOM
            for (var i = 0, len = elementsBuffer.length; i < len; i++) {
                var currentElement = elementsBuffer[i];

                // Using the already existing function
                appendChild(currentElement.node, currentElement.selector);
            }
        }
    }
    
    // Craete element and append to buffer
    function createAndAppendToBuffer(nodeToCreate, selector) {
        var newNode = document.createElement(nodeToCreate);

        // Using the already existing function
        appendToBuffer(newNode, selector);
    }

    function cssSelector(selector) {
        var foundNode = document.querySelectorAll(selector);
        return foundNode;
    }

    return {
        appendChild: appendChild,
        createAndAppendChild: craeteAndAppendChild,
        removeChild: remove,
        addHandler: addHandler,
        appendToBuffer: appendToBuffer,
        createAndAppendToBuffer: createAndAppendToBuffer,
        cssSelector: cssSelector
    }
}());