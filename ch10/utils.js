module.exports = {
    randomElement: function (array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    elementFromChar: function(legend, ch) {
        if (ch == " ")
            return null;
        var element = new legend[ch]();
        element.originChar = ch;
        return element;
    },


    charFromElement: function(element) {
        if (element == null)
            return " ";
        else
            return element.originChar;
    }

};
