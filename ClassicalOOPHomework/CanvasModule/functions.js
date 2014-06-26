var CanvasModule = function () {
    // Creating a canvas object and inits canvas options
    function Canvas(selector, width, height) {
        self = this;
        self.canvasNode = document.querySelector(selector);
        self.ctx = self.canvasNode.getContext("2d");

        self.canvasNode.width = width;
        self.canvasNode.height = height;

        // PRIVATE FUNCS
        // Used for each shape
        function startDrawingCommands() {
            self.ctx.beginPath();
            self.ctx.save();
        }

        function endDrawingCommands(fillColor, strokeColor) {
            if (fillColor) {
                self.ctx.fillStyle = fillColor;
            } else {
                // Default Fill Color
                self.ctx.fillStyle = "#000";
            }

            // If no stroke color...the stroke is skipped
            if (strokeColor) {
                self.ctx.strokeStyle = strokeColor;
                self.ctx.stroke();
            }

            self.ctx.fill();
            self.ctx.restore();
        }

        // Get radian from degrees input
        function getRadian(degrees) {
            return degrees * Math.PI / 180;
        }

        // PUBLIC FUNCS
        // Add Rectangle Function
        function addRect(posX, posY, width, height, fillColor, strokeColor) {
            startDrawingCommands()
            self.ctx.rect(posX, posY, width, height);
            endDrawingCommands(fillColor, strokeColor);
        }

        // Add Circle Function
        function addCircle(posX, posY, radius, fillColor, strokeColor) {
            startDrawingCommands()
            self.ctx.arc(posX, posY, radius, 0, getRadian(360)); // Full Circle
            endDrawingCommands(fillColor, strokeColor);
        }

        // Add Line Function
        function addLine(startX, startY, endX, endY, fillColor, strokeColor) {
            startDrawingCommands()
            self.ctx.moveTo(startX, startY);
            self.ctx.lineTo(endX, endY);
            endDrawingCommands(fillColor, strokeColor);
        }

        return {
            addRect: addRect,
            addCircle: addCircle,
            addLine: addLine
        }
    }

    return {
        Canvas: Canvas
    };
}();