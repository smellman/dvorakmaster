Titanium.include('commands.js');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');

var win = Titanium.UI.createWindow();

// array's structure
// i[0] = key (non shift)
// i[1] = key width
// i[2] = key (with shift)
// i[3] = ...?

var items_1 = [
    ['`', 1, '~'], 
    ['1', 1, '!'],
    ['2', 1, '@'],
    ['3', 1, '#'],
    ['4', 1, '$'],
    ['5', 1, '%'],
    ['6', 1, '^'],
    ['7', 1, '&'],
    ['8', 1, '*'],
    ['9', 1, '('],
    ['0', 1, ')'],
    ['[', 1, '{'],
    [']', 1, '}'],
    ['BS', 2, 'BS']
];

var items_2 = [
    ['Tab', 1.5, 'Tab'],
    ["'", 1, '\"'],
    [',', 1, '<'],
    ['.', 1, '>'],
    ['p', 1, 'P'],
    ['y', 1, 'Y'],
    ['f', 1, 'F'],
    ['g', 1, 'G'],
    ['c', 1, 'C'],
    ['r', 1, 'R'],
    ['l', 1, 'L'],
    ['/', 1, '?'],
    ['=', 1, '+'],
    ['\\', 1.5, '|']
];

var items_3 = [
    ['CAPS', 1.8, 'CAPS'],
    ['a', 1, 'A'],
    ['o', 1, 'O'],
    ['e', 1, 'E'],
    ['u', 1, 'U'],
    ['i', 1, 'I'],
    ['d', 1, 'D'],
    ['h', 1, 'H'],
    ['t', 1, 'T'],
    ['n', 1, 'N'],
    ['s', 1, 'S'],
    ['=', 1, '-'],
    ['Enter', 2.2, 'Enter']
];

var items_4 = [
    ['Shift', 2.1, 'Shift'],
    [';', 1, ':'],
    ['q', 1, 'Q'],
    ['j', 1, 'J'],
    ['k', 1, 'K'],
    ['x', 1, 'X'],
    ['b', 1, 'B'],
    ['m', 1, 'M'],
    ['w', 1, 'W'],
    ['v', 1, 'V'],
    ['z', 1, 'Z'],
    ['Shift', 2.9, 'Shift']
];

var items_5 = [
    ['', 4, ''],
    ['Space', 7, 'Space'],
    ['', 4, '']
];

createALines(items_1, 1, win);
createALines(items_2, 2, win);
createALines(items_3, 3, win);
createALines(items_4, 4, win);
createALines(items_5, 5, win);

win.orientationModes = [Titanium.UI.LANDSCAPE_LEFT];

win.open();
