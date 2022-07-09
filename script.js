const cocktails = 
        `<div class="all-cocktails">
        <div class="cocktail-item">
            <h2>songbird won</h2>
            <p class="ings">empress gin, st. germaine elderflower, lime</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>shy + humble</h2>
            <p class="ings">himbrini winterbird gin, gran marnier, pear brandy, jasmine, lemon</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>there's only one belafonte</h2>
            <p class="ings">tea-infused maker's mark bourbon, amaro nonino, peach, lemon</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>somehow heartbreak feels so good</h2>
            <p class="ings">ten to one white rum, ume plum liqueur, lime, bubbles, mint</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>elote margarita</h2>
            <p class="ings">milagro reposado tequila, nixta corn liqueur, agave, lime</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>penicilin</h2>
            <p class="ings">aberfeldy scotch, barrows intense ginger liqueur, honey, lemon</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>last word</h2>
            <p class="ings">hendricks gin, green chartreuse, maraschino liqueur, lime</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>churchill old fashioned</h2>
            <p class="ings">dickel no. 12 bourbon, demerara, bitters</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>mezcal negroni</h2>
            <p class="ings">el silencio mezcal, campari, noilly prat sweet vermouth</p>
        </div><br>
        <div class="cocktail-item">
            <h2>puma rickshaw</h2>
            <p class="ings">dickel no. 12 bourbon, demerara, bitters</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>only fans</h2>
            <p class="ings">smoke lab vodka, guava, lemon, sidecar of bubbles</p>
        </div>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
        </div>
        </div>`

const foodItems = 
        `<div class="all-food-items">
            <div class="food-item">
            <h2>charcuterie<h2>
            <p>selection of cured meats and cheeses, spreads and fruit</p>
            <h1 class="menu-item-price inline">&nbsp;&nbsp;$22</p>
            <h2>wings</h2>
            <p class="sauces">asian • buffalo jerk</p>
            <h1 class="menu-item-price inline">&nbsp;&nbsp;$12</p>
            </div>
        <div class="food-item">
            <h2>deviled-eggs</h2>
            <p>with prosciutto, crispy onion, and chives</p>
            <h1 class="menu-item-price">$12</h1>
        </div>
        <div class="food-item">
            <h2>beet tartare</h2>
            <p>red beets, avocado, frisse, mache, goat cheese, almond, rye crackers</p>
            <h1 class="menu-item-price">$16</h3>
        </div>
        <div class="food-item">
            <h2>harlem harvest</h2>
            <p>arugala, baby spinach, asparagus, radish, shaved parmesean, crispy chick peas, lemon tarmeric tahini</p>
            <h1 class="menu-item-price">$10</h3>
        </div>
        <div class="food-item">
            <h2>fried cauliflower</h2>
            <p>vegan ranch</p>
            <h1 class="menu-item-price">$10</h3>
        </div>
        <div class="food-item">
            <h2>zucchini blossoms</h2>
            <p>zucchini flowers, ricotta, reggiano, crispy capers, saffron aioli</p>
            <h1 class="menu-item-price">$15</h1>
        </div>
        <div class="food-item">
            <h2 inline>truffle mac</h2>
            <p>gruyere and new york cheddar, grana padana, truffle, panko</p>
            <h1 class="menu-item-price inline">&nbsp;&nbsp;$18</h2>
        </div>
        <div class="food-item">
            <h2>fried pickles</h2>
            <p>buttermilk aioli</p>
            <h1 class="menu-item-price">$10</h3>
        </div>
        <div class="food-item">
            <h2>lobster bao</h2>
            <p>maine lobster, asian slaw, hoisin, cilantro, mint, bao bun</p>
            <h1 class="menu-item-price">$22</h3>
        </div>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
        </div>
        </div>`
 
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

function showWine() {
    shownMenuItems.innerHTML = 
        `<h2>wine</h2>
        <h1 class="menu-item-price">$10</h1>
        <p>woffler estate rose<br>
            forge cellars reisling dry<br>
            bridge lane sauvignon blanc<br>
            woffler estate chardonnay<br>
            bridge lane red blend<br>
            woffler estate cabernet franc<br>
            forge cellars pinot noir<br>
            estate lieb sparkling pinot blanc<br>
        </p>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
        </div>`
}

function showCocktails() {
    shownMenuItems.innerHTML = cocktails
    
}

function showBeer() {
    shownMenuItems.innerHTML = 
    `<div id="beer-menu-container"></div>
        <h2>cans</h2>
        <h1 class="menu-item-price">$8</h1>
        <p class="beer-list-cans inline">bushwick pilsner<br>
                save the robots IPA<br>
                talea cherry float sour ale</p>
        <h2>draught</h2>
        <h1 class="menu-item-price">varied</h1>
            <p class="beer-list-cans inline">coney island pilsner<br>
                coney island mermaid IPA<br>
                bronx city island sout<br>
                bronx no res IPA<br>
                bronx summer ale<br>
                montauk easy riser<br>
                captain lawrence classic lager<br>
                collective arts guava gose<br>
                six point anti resin IPA<br>
                wild east prevernal love<br>
                EBBS kolsch<br>
                hudson north cider<br>
            </p>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
        </div>`
        
}

function showFood() {
    shownMenuItems.innerHTML = foodItems
}

function showDesserts() {
    shownMenuItems.innerHTML = 
        `<h2>strawberry shortcake</h2> 
            <p>southern biscuit, whipped cream, almond, mint</p>
            <h1 class="menu-item-price">$10</h1>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
        </div>`
}

menuTabs.addEventListener("click", function(e) {
    if (e.target.id === "wine") {
        showWine()
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
