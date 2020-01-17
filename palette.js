// Yikes

let clear = function() {
    let c = document.getElementById('container');
    while (c.firstChild) {
        c.removeChild(c.firstChild);
    }
}

let display = function(colors) {
    clear();

    let c = document.getElementById('container');
    for (let colorObj of colors) {
        let box = document.createElement('div');
        box.className = 'palette-box';
        box.style.backgroundColor = colorObj.hexColor;
        box.style.color = 'white';
        box.style.textShadow = '1px 1px 4px black';
        let text = document.createTextNode(colorObj.hexColor);
        let hexP = document.createElement('p');
        hexP.appendChild(text);
        box.appendChild(hexP);

        if (colorObj.description) {
            let descText = document.createTextNode(colorObj.description);
            let descP = document.createElement("p");
            descP.appendChild(descText);
            box.appendChild(descP);
        }

        c.appendChild(box);
    }
};

let parseList = function(str) {
    let colorStmts = str.split(",");
    let colorObjs = [];
    for (let stmt of colorStmts) {
        stmt = stmt.trim();

        let hexColor = stmt.slice(0, 7);
        // We're being strict
        if (! /^#[a-fA-F0-9]{6}$/.test(hexColor)) {
            colorObjs.push({"hexColor": "#000000", "description": 'Invalid: \"' + stmt + '\"'});
            continue;
        }

        let description = stmt.slice(7).trim();

        colorObjs.push({"hexColor": hexColor, "description": description});
    }
    return colorObjs;
};

let update = function() {
    let b = document.getElementById('input-box');
    let colors = parseList(b.value);
    display(colors);
};
