var lamp = {
    red: {
        obj: document.getElementById('red'),
        timeout: 3,
        style: ['red', 'gray', 'gray'],
        next: 'green'
    },
    yellow: {
        obj: document.getElementById('yellow'),
        timeout: 2,
        style: ['gray', 'yellow', 'gray'],
        next: 'red'
    },
    green: {
        obj: document.getElementById('green'),
        timeout: 5,
        style: ['gray', 'gray', 'green'],
        next: 'yellow'
    },
}