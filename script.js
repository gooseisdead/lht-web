const cocktails = 
        `<div class="all-cocktails">
        <div class="cocktail-item">
            <h2>skew it on the bar-b</h2>
            <p class="ings">el silencío mexcal, creme de peche, lime juice</p>
            <p class="menu-item-price">$12</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>la RUMba</h2>
            <p class="ings">don q pineapple rum, don q cocnut rum, coco lopez, pineapple juice</p>
            <o class="served">served blended</p>
            <p class="menu-item-price">$12</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>itsoweezee</h2>
            <p class="ings">redemption rye, rocky's milk punch, lemonade & iced tea</p>
            <p class="menu-item-price">$12</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>crush on you</h2>
            <p class="ings">ten to one white rum, oregat, pineapple & lime juice</p>
            <p class="served">served over crushed ice with a ten to one dark rum float
            <p class="menu-item-price">$12</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>ms. fat booty</h2>
            <p class="ings">empress gin, creme de peche, pineapple juice, champagne</p>
            <p class="menu-item-price">$12</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>passion me by</h2>
            <p class="ings">don q passion fruit rum, blank vodka, pama liqueur, orange & cranberry juice</p>
            <p class="menu-item-price">$12</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>brass monkey</h2>
            <p class="ings">borough bourbon, dubonnet, campari, orange bitters</p>
            <p class="menu-item-price">$12</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>gin & juice</h2>
            <p class="ings">grey whale gin, canton ginger liqueur, celery & cucumber juice</p>
            <p class="menu-item-price">$12</p>
        </div>
        <a href="#menu" class="back-to-top-click">back to top</a>
        </div>`

const foodItems = 
        `<div class="food-item">
            <h2>our famous wings</h2>
            <p class="sauces">mild • medium • hot • nuclear • ass-burner • teriyaki • BBQ • cajun</p>
            <p class="served">served with celery sticks & blue cheese</p>
            <p class="inline">10 pc </p><p class="menu-item-price inline">&nbsp;&nbsp; $14.50</p>
            <p class="inline">20 pc </p><p class="menu-item-price inline">&nbsp;&nbsp; $27</p>
            <br>
            <p class="inline"> extra blue cheese </p><p class="menu-item-price inline">&nbsp;&nbsp; .50¢</p>
            <p class="inline"> well done </p><p class="menu-item-price inline">&nbsp;&nbsp; $1</p>
        </div>
        <br>
        <div class="food-item">
            <h2 inline>hand cut fries or tater tots</h2> <h2 class="menu-item-price inline">&nbsp;&nbsp; $8</h2>
            <br>
            <p class="inline">make 'em CAJUN<p class="menu-item-price inline">&nbsp;&nbsp; +$1</p>
            <p class="inline">add CHEESE<p class="menu-item-price inline">&nbsp;&nbsp; +$3</p>
            <br>
            <h3>disco style</h3>
            <p>swimming in brown gravy, with melted cheddar and mozzarella blend</p>
            <p class="menu-item-price">$14.50</p>
            <h3>chili cheese</h3>
            <p>heaped with our homemade spicy chili, melted cheddar and mozzarella blend</p>
            <p class="menu-item-price">$14.50</p>
            <h3>loaded!</h3>
            <p>melted cheddar and mozzarella, crispy bacon, sour cream & scallion</p>
            <p class="menu-item-price">$14.50</p>
        </div>
        <div class="food-item">
            <h2>nachos grande</h2>
            <h3 class="menu-item-price">$13</h3>
            <p>house-fried tortilla chips, onions, tomatoes, jalapeños, cheddar and mozzarella</p>
            <p>homemade beef chili</p>
            <p class="served">served with sour cream and salsa on the side</p>
            <p class="inline">substitute pulled pork or grilled chicken<p class="menu-item-price inline">&nbsp;&nbsp; +$2</p>
            <p class="inline">or try them with grilled steak<p class="menu-item-price inline">&nbsp;&nbsp; +$5</p>
            <br>
            <br>
            <h3>make 'em TOT-CHOS</h3>
            <p class="inline">our nachos served over a bed of tater tots<p class="menu-item-price inline">&nbsp;&nbsp; +$2</p>
        </div>
        <a href="#menu" class="back-to-top-click">back to top</a>
        `

// const beerItems = 
//         `<div id="menu-container"></div>`
//         <script type="text/javascript">
//           !function getScript(e,t){var a=document.createElement("script"),n=document.getElementsByTagName("script")[0];a.async=1,n.parentNode.insertBefore(a,n),a.onload=a.onreadystatechange=function(e,n){(n||!a.readyState||/loaded|complete/.test(a.readyState))&&(a.onload=a.onreadystatechange=null,a=undefined,n||t&&t())},a.src=e}("https://embed-menu-preloader.untappdapi.com/embed-menu-preloader.min.js",function(){PreloadEmbedMenu("menu-container",16629,62341)});
//         </script>
 


// **********
// toggle navbar
// **********

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

// ************
// close nav when clicking on a new item
// ***********

document.addEventListener("click", function(e) {
    if (e.target.closest(".nav-item")) {
        toggleNav();
    }
})


// ************
// STICKY HEADER 
// **************

window.addEventListener("scroll", function() {
    if(this.pageYOffset > 60) {
        document.querySelector(".header").classList.add("sticky");
    } else {
        document.querySelector(".header").classList.remove("sticky")
    }
})


const menuTabs = document.querySelector(".menu-tabs");

const menuContainer = document.querySelector(".menu-container")
const shownMenuItems = document.querySelector(".shown-menu-items")

function showBrunch() {
    shownMenuItems.innerHTML = 
        `<p>brunch</p>
        <a href="#menu" class="back-to-top-click">back to top</a>`
}

function showCocktails() {
    shownMenuItems.innerHTML = cocktails
    
}

function showBeer() {
    shownMenuItems.innerHTML = 
        `<div id="beer-menu-container"></div>
        <a href="#menu" class="back-to-top-click">back to top</a>
        <script type="text/javascript">`
          !function getScript(e,t){var a=document.createElement("script"),n=document.getElementsByTagName("script")[0];a.async=1,n.parentNode.insertBefore(a,n),a.onload=a.onreadystatechange=function(e,n){(n||!a.readyState||/loaded|complete/.test(a.readyState))&&(a.onload=a.onreadystatechange=null,a=undefined,n||t&&t())},a.src=e}("https://embed-menu-preloader.untappdapi.com/embed-menu-preloader.min.js",function(){PreloadEmbedMenu("beer-menu-container",16629,62341)});
        `</script>`
        
}

function showFood() {
    shownMenuItems.innerHTML = foodItems
}

function showDesserts() {
    shownMenuItems.innerHTML = 
        `<p>dessert</p> `
}

menuTabs.addEventListener("click", function(e) {
    if (e.target.id === "brunch") {
        showBrunch()
    } else if (e.target.id === "cocktails") {
        showCocktails()
    } else if (e.target.id === "dinner") {
        showFood() 
    } else if (e.target.id === "beers") {
        showBeer()
    } else if (e.target.id === "desserts") {
        showDesserts()
    }
    
})

// const testSpot = document.querySelector(".menu-item-title")


// const testButton = document.querySelector(".test")
// testButton.addEventListener("click", function(e) {
//     showBrunch()
// })

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
const menuNavbar = document.querySelector(".menu-tabs-navbar")

// Get the offset position of the navbar
const menuSticky = menuNavbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= menuSticky) {
    menuNavbar.classList.add("sticky-menu")
  } else {
    menuNavbar.classList.remove("sticky-menu");
  }
}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




