var movingShapes = (function movingShapes() {
    var divTemplate = document.createElement("div"),
        circleMotionDivs = document.getElementsByClassName("ellipse"), // LIVE NODE
        rectMotionDivs = document.getElementsByClassName("rect"), // LIVE NODE
        circleRotationAngle = 0;

    // Some base styles for all divs
    divTemplate.style.width = "30px";
    divTemplate.style.height = "30px";
    divTemplate.style.borderRadius = "30px";
    divTemplate.style.position = "absolute";
    divTemplate.style.left = "400px";
    divTemplate.style.top = "100px";

    // PRIVATE FUNCTIONS

    // Returns a random integer between min and max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Returns Random RGB Color
    function getRandomColor() {
        var red = getRandomInt(0, 255),
            green = getRandomInt(0, 255),
            blue = getRandomInt(0, 255);
        return red + "," + green + "," + blue;
    }

    // Generates DIV with random background and border
    function generateRandomDiv(motionType) {
        divTemplate.style.backgroundColor = "rgb(" + getRandomColor() + ")";
        divTemplate.style.border = "3px solid rgb(" + getRandomColor() + ")";
        divTemplate.className = motionType;

        return divTemplate.cloneNode(true);
    }

    // PUBLIC FUNCTIONS

    // Add random div to the DOM 
    function addElement(motionType) {
        document.body.appendChild(generateRandomDiv(motionType));
    }
    
    function rotateCircle() {
        var circleWidth = 100,
            circleHeight = 100,
            distanceBetweenDivs = 20,
            distanceFromTopLeftCorner = 200,
            rotationSpeed = 2;

        // Calculate and set position for each div
        for (var i = 0; i < circleMotionDivs.length; i++) {
            var x = distanceFromTopLeftCorner + circleWidth * Math.cos((circleRotationAngle + (i * distanceBetweenDivs)) * Math.PI / 180);
            var y = distanceFromTopLeftCorner + circleHeight * Math.sin((circleRotationAngle + (i * distanceBetweenDivs)) * Math.PI / 180);

            circleMotionDivs[i].style.left = x + 'px';
            circleMotionDivs[i].style.top = y + 'px'; 
        }

        // Update angle
        circleRotationAngle += rotationSpeed;

        if (circleRotationAngle > 360) {
            circleRotationAngle = 0;
        }
    }

    function rotateRect() {
        // Restrictions
        var speed = 3,
            minTop = 100,
            maxTop = 300,
            minLeft = 400,
            maxLeft = 600;

        for (var i = 0; i < rectMotionDivs.length; i++) {
            var currentDiv = rectMotionDivs[i],
                currentDirection = currentDiv.getAttribute("direction"),
                posX = currentDiv.offsetLeft,
                posY = currentDiv.offsetTop;

            // Calculate and change directions
            if (currentDirection == "right") {
                currentDiv.style.left = (posX + speed) + "px";

                if (posX >= maxLeft) {
                    currentDiv.setAttribute("direction", "down");
                }

            } else if (currentDirection == "left") {
                currentDiv.style.left = (posX - speed) + "px";

                if (posX <= minLeft) {
                    currentDiv.setAttribute("direction", "up");
                }

            } else if (currentDirection == "down") {
                currentDiv.style.top = (posY + speed) + "px";

                if (posY >= maxTop) {
                    currentDiv.setAttribute("direction", "left");
                }

            } else if (currentDirection == "up") {
                currentDiv.style.top = (posY - speed) + "px";

                if (posY <= minTop) {
                    currentDiv.setAttribute("direction", "right");
                }

            } else {
                // Set initial direction
                currentDiv.setAttribute("direction", "right");
            }
        }
    }

    return {
        add: addElement,
        rotateCircle: rotateCircle,
        rotateRect: rotateRect
    };
}());