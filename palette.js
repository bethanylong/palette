var clear = function() {
    var c = document.getElementById('container');
    while (c.firstChild) {
        c.removeChild(c.firstChild);
    }
}

var display = function(colors) {
    clear();

    var c = document.getElementById('container');
    for (var i = 0; i < colors.length; i++) {
        var box = document.createElement('div');
        box.className = 'palette-box';
        box.style.backgroundColor = colors[i];
        box.style.color = 'white';
        box.style.textShadow = '1px 1px 4px black';
        var text = document.createTextNode(colors[i]);
        box.appendChild(text);
        c.appendChild(box);
    }
};

var parseList = function(str) {
    var parsed = str.replace(/[^a-fA-F0-9, ]/g, '').split(/[ ,]/);
    var finalParsed = [];
    var finalParsedIx = 0;
    for (var i = 0; i < parsed.length; i++) {
        if (parsed[i].length > 0) {
            finalParsed[finalParsedIx++] = '#' + parsed[i];
        }
    }
    return finalParsed;
};

var update = function() {
    var b = document.getElementById('input-box');
    var colors = parseList(b.value);
    display(colors);
};
