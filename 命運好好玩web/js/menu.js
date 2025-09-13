let bool = true
let menu = document.querySelector('menu')
let bar = document.getElementsByClassName('bar')

document.querySelector('nav').addEventListener('click', function () {
    if (bool) {
        menu.style.display = 'block'
        this.setAttribute('class', 'fa-solid fa-x')
        this.children[0].style.opacity = 0
        this.children[1].style.opacity = 0
        this.children[2].style.opacity = 0
        this.children[3].style.opacity = 0
    } else {
        menu.style.display = 'none'
        this.setAttribute('class', 'bar')
        this.children[0].style.opacity = 1
        this.children[1].style.opacity = 1
        this.children[2].style.opacity = 1
        this.children[3].style.opacity = 1
    }
    bool = !bool
})