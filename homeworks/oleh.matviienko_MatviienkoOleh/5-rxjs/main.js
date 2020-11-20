const { fromEvent } = window.rxjs;
const { map,
    throttleTime,
    pairwise,
} = window.rxjs.operators;

const header = document.getElementById('header');
fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset),
    throttleTime(300),
    pairwise(),
    map(([a,b]) => {
        if(a > b) {
            if ((a - b) >= 50) return 'Up';
        }
        if(a < b) {
            if ((b - a) >= 50) return 'Down';
        }
    }),
).subscribe((event) => {
    switch (event) {
        case 'Up':
            header.classList.add('header-show');
            break;
        case 'Down':
            header.classList.remove('header-show');
            break;
    }
});
