import {Router} from './router.js'

// function changeImg(page, image){

//   const body = document.querySelector('body')

//   page.addEventListener('click', function(){
//     body.style.cssText = image
//   })
// }

const router = new Router()
router.add('/', './pages/home.html')
router.add('/universe', './pages/universe.html')
router.add('/exploration', './pages/exploration.html')
router.add(404, './pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

// const home = document.querySelector('.home')
// const universe = document.querySelector('.universe')
// const exploration = document.querySelector('.exploration')
// const error = document.querySelector('.error')

// changeImg(home, 'background-image: url(/images/mountains-universe-1.png);');
// changeImg(universe, 'background-image: url(/images/mountains-universe02.png);');
// changeImg(exploration, 'background-image: url(/images/mountains-universe-3.png);');
// changeImg(error, 'background-image: url(/images/mountains-universe-2.png);');






// const routes = {
//   "/": "/pages/home.html",
//   "/universe": "/pages/universe.html",
//   "/exploration": "/pages/exploration.html",
//   404: "/pages/404.html",
// }

// handle()

// window.onpopstate = () => handle()