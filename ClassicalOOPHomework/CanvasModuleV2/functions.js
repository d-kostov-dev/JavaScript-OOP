// Using Prototype
function Canvas(selector, width, height) {
    self = this;
    self.canvasNode = document.querySelector(selector);
    self.ctx = self.canvasNode.getContext("2d");
    self.canvasNode.width = width;
    self.canvasNode.height = height;
}

Canvas.prototype.addRect = function (posX, posY, width, height, fillColor, strokeColor) {
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.rect(posX, posY, width, height);

    if (fillColor) {
        this.ctx.fillStyle = fillColor;
    } else {
        // Default Fill Color
        this.ctx.fillStyle = "#000";
    }

    // If no stroke color...the stroke is skipped
    if (strokeColor) {
        this.ctx.strokeStyle = strokeColor;
        this.ctx.stroke();
    }

    this.ctx.fill();
    this.ctx.restore();
}

Canvas.prototype.addCircle = function (posX, posY, radius, fillColor, strokeColor) {
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.arc(posX, posY, radius, 0, this.getRadian(360)); // Full Circle

    if (fillColor) {
        this.ctx.fillStyle = fillColor;
    } else {
        // Default Fill Color
        this.ctx.fillStyle = "#000";
    }

    // If no stroke color...the stroke is skipped
    if (strokeColor) {
        this.ctx.strokeStyle = strokeColor;
        this.ctx.stroke();
    }

    this.ctx.fill();
    this.ctx.restore();
}

Canvas.prototype.addLine = function (startX, startY, endX, endY, fillColor, strokeColor) {
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);

    if (fillColor) {
        this.ctx.fillStyle = fillColor;
    } else {
        // Default Fill Color
        this.ctx.fillStyle = "#000";
    }

    // If no stroke color...the stroke is skipped
    if (strokeColor) {
        this.ctx.strokeStyle = strokeColor;
        this.ctx.stroke();
    }

    this.ctx.fill();
    this.ctx.restore();
}

Canvas.prototype.getRadian = function getRadian(degrees) {
    return degrees * Math.PI / 180;
}