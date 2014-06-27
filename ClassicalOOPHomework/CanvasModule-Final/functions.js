var Canvas = (function () {
    function Canvas(selector, width, height) {
        self = this;
        
        // We can use VAR here because we will not use them anywhere else
        var canvasNode = document.querySelector(selector);
        canvasNode.width = width;
        canvasNode.height = height;

        self.ctx = canvasNode.getContext("2d");
    }

    Canvas.prototype = {
        addRect: function (posX, posY, width, height, fillColor, strokeColor) {
            this.startCommands();
            this.ctx.rect(posX, posY, width, height);
            this.endCommands(fillColor, strokeColor);
        },
        addCircle: function (posX, posY, radius, fillColor, strokeColor) {
            this.startCommands();
            this.ctx.arc(posX, posY, radius, 0, this.getRadian(360));
            this.endCommands(fillColor, strokeColor);
        },
        addLine: function (startX, startY, endX, endY, fillColor, strokeColor) {
            this.startCommands();
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);
            this.endCommands(fillColor, strokeColor);
        },
        startCommands: function () {
            this.ctx.beginPath();
            this.ctx.save();
        },
        endCommands: function (fillColor, strokeColor) {
            if (fillColor) {
                this.ctx.fillStyle = fillColor;
            } else {
                this.ctx.fillStyle = "#000";
            }

            // If no stroke color...the stroke is skipped
            if (strokeColor) {
                this.ctx.strokeStyle = strokeColor;
                this.ctx.stroke();
            }

            this.ctx.fill();
            this.ctx.restore();
        },
        getRadian: function getRadian(degrees) {
            return degrees * Math.PI / 180;
        }
    };

    return Canvas;
}());