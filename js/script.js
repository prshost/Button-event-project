
let button = document.querySelector('#open');
let x,y,xf,yf;

button.addEventListener('click', (e) => {

    xf = e.offsetX;
    yf = e.offsetY;

    let span = document.createElement('span');
    span.style.left = xf + 'px'
    span.style.top = yf + 'px'
    e.target.appendChild(span)

    setTimeout(() => {
        span.remove()
    }, 1000)
    
})