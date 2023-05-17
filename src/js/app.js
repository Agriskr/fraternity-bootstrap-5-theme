import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../node_modules/spotlight.js/dist/spotlight.bundle.js';


import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// app.use('/css', express.static(path.join(__dirname, "css")));

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        var navigationBar = document.getElementById("myNavbar")
        navigationBar.classList.remove('navbar-transparent')
        navigationBar.classList.add('navbar-transparent-dark');
    } else {
        var navigationBar = document.getElementById("myNavbar")
        navigationBar.classList.remove('navbar-transparent-dark')
        navigationBar.classList.add('navbar-transparent')


    }
}
//navbārā parāda pašreizējo lapu. 
document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href){
      link.setAttribute('aria-current', 'page')
    }
  })


 