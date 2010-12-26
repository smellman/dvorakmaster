// commands.js
function createALines(items, aline, win) {
    var base_size = 68;
    var bottom_value = base_size * (5 - aline);
    var count = 0;
    for (var a = 0; a < items.length; a++) {
	var i = items[a];
	var aBtn = Titanium.UI.createButton({
	    title:i[0],
	    height: base_size,
	    width: base_size * i[1],
	    bottom: bottom_value,
	    left: base_size * count
	});
	// TODO: eventlistener
	win.add(aBtn);
	count = count + i[1];
    }
}
