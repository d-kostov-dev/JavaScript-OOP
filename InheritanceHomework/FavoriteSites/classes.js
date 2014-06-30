var FavoriteItem = (function () {
    function FavoriteItem(title) {
        var self = this;
        self.title = title;
    }

    return FavoriteItem;
}());

var Folder = (function () {
    function Folder(title) {
        var self = this;
        FavoriteItem.call(self, title);
        self.urls = [];
    }

    Folder.prototype = new FavoriteItem();

    return Folder;
}());

var Url = (function () {
    function Url(title, url) {
        var self = this;
        FavoriteItem.call(self, title);
        self.url = url;
    }

    Url.prototype = new FavoriteItem();

    return Url;
}());