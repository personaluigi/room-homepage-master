const slider = [
    {
        h1: "Discover innovative ways to decorate",
        p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        img: './images/image-hero-1.jpg'
    },
    {
        h1: "We are available all across the globe",
        p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        img: './images/image-hero-2.jpg'
    },
    {
        h1: "Manufactured with the best materials",
        p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        img: './images/image-hero-3.jpg'
    }
]

const btnMenu = document.getElementById('btn-menu')
const nav = document.querySelector('.nav')

btnMenu.addEventListener('click', () => {
    document.getElementById('hamburguer').classList.toggle('menu-active')
    nav.classList.toggle('nav-active')
})

const prev = document.getElementById('btnPrev')
const next = document.getElementById('btnNext')
const h1 = document.getElementById('feedback-title')
const p = document.getElementById('feedback-content')
const header = document.getElementById('header')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function () {
    showContent(currentItem)
})

function showContent(currentItem) {
    const item = slider[currentItem]
    header.style.backgroundImage = `url(${item.img})`
    h1.textContent = item.h1
    p.textContent = item.p
}

prev.addEventListener('click', function () {
    if (currentItem > 0) {
        currentItem--
        showContent(currentItem)
    } else if (currentItem === 0) {
        currentItem = 2
        showContent(currentItem)
    }
})

next.addEventListener('click', function () {
    if (currentItem < 2) {
        currentItem++
        showContent(currentItem)
    } else if (currentItem === 2) {
        currentItem = 0
        showContent(currentItem)
    }
})