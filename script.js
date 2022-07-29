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
            <h2>penicillin</h2>
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
            <p class="ings">* can be made zero-proof using our NA spirit partners</p>
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
            <p class="ings">* can be made zero-proof using our NA spirit partners</p>
        </div>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
        </div>
        </div>`

const foodItems = 
        `
        <div class="food-item">
            <h2>sea bass</h2>
            <p>summer squash, rainbow swiss chard, carrot top pesto, sorrel</p>
            <h1 class="menu-item-price">$28</h3>
            </div>
        <div class="food-item">
            <h2>vegan scallops (v)</h2>
            <p>king oyster, wheat berries, caulitflower, spirulina, black garlic, tumaric tahini sauce, almond</p>
            <h1 class="menu-item-price">$24</h3>
            </div>
        <div class="food-item">
            <h2>steak</h2>
            <p>12oz dry aged new york strip, broccoli rabe, truffle croquettes, maitake, hollandaise, micro herbs</p>
            <h1 class="menu-item-price">$36</h1>
            </div>
        <div class="food-item">
            <h2>chicken</h2>
            <p>southern fried, whipped mash, collard greens, vidalia gravy</p>
            <h1 class="menu-item-price">$26</h1>
            </div>
        <div class="food-item">
            <h2>maitake fried chicken (v)</h2>
            <p>southern fried, cauliflower, collard greens, vidalia gravy</p>
            <h1 class="menu-item-price">$26</h1>
            </div>
        <div class="food-item">
            <h2>burger</h2>
            <p>grass fed beef, lettuce, tomato, local cheddar, carmelized onions, brioche, hand-cut fries</p>
            <h1 class="menu-item-price">$22</h1>
            </div>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
            </div>
        `
 
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
            woffler estate cabernet franc</p><br>
            <h1 class="menu-item-price">$18</h1>
            <p>forge cellars pinot noir</p>
            <h1 class="menu-item-price">$14</h1>
            <p>lieb cellars sparkling pinot blanc estate<br>
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
            <h2>apple torte tatin</h2> 
            <p>new york state cortland apples, pastry, marscapone, herbs</p>
            <h1 class="menu-item-price">$10</h1>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
        </div>`
}


function showSalads() {
    shownMenuItems.innerHTML = 
        `<h2>heirloom harlem harvest</h2> 
            <p>heirloom tomatoes, burrata, cucumber, arugala, basil, lemon herb oil </p>
            <h1 class="menu-item-price">$16</h1>
            <h2>beet tartare</h2> 
            <p>red beets, avocado, frisee, mache, goat cheese, almond, rye crackers</p>
            <h1 class="menu-item-price">$16</h1>
            <h2>baby spinach</h2> 
            <p>garlic, olive oil, lemon</p>
            <h1 class="menu-item-price">$8</h1>
            <h2>broccoli rabe</h2> 
            <p>garlic, olive oil, lemon</p>
            <h1 class="menu-item-price">$8</h1>
            <h2>truffle fries</h2> 
            <p>sea salt, parmesan, herbs</p>
            <h1 class="menu-item-price">$10</h1>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
        </div>`
}

function showBar() {
    shownMenuItems.innerHTML = 
        `<div class="food-item">
        <h2>charcuterie</h2>
        <p>selection of cured meats + cheeses, spreads + fruit</p>
        <h1 class="menu-item-price inline">&nbsp;&nbsp;$22</p>
        </div>
        <div class="food-item">
        <h2>deviled-eggs</h2>
        <p>prosciutto, crispy onion, chives</p>
        <h1 class="menu-item-price">$12</h1>
        </div>
        <div class="food-item">
            <h2>wings</h2>
            <p class="sauces">asian or buffalo jerk</p>
            <h1 class="menu-item-price inline">&nbsp;&nbsp;$12</p>
            </div>
            <h2>truffle fries</h2> 
            <p>sea salt, parmesan, herbs</p>
            <h1 class="menu-item-price">$10</h1>
            <div class="food-item">
            <h2>fried cauliflower</h2>
            <p>vegan ranch</p>
            <h1 class="menu-item-price">$10</h3>
            </div>
        <div class="food-item">
            <h2>fried pickles</h2>
            <p>buttermilk aioli</p>
            <h1 class="menu-item-price">$10</h3>
            </div>
            <div class="food-item">
            <h2>fried green tomatoes</h2>
            <p>watermelon, feta, micro herbs</p>
            <h1 class="menu-item-price">$10</h3>
            </div>
            <div class="food-item">
        <h2>Chips</h2>
        <p>Homemade potato chips, seasoned with Old Bay</p>
        <h1 class="menu-item-price">$8</h1>
        </div>
        <div class="food-item">
        <h2>olives</h2>
        <p>marinated, citrus</p>
        <h1 class="menu-item-price">$8</h1>
        </div>
        <div class="back-to-top-click">
        <a href="#menu" >back to top</a>
        </div>`
}

function showStarters() {
    shownMenuItems.innerHTML = 
        `<div class="food-item">
        <div class="food-item">
        <h2>farmers bowl</h2>
        <p>farro, baby spinach, squash, watermelon radish, lemon creme, micro herbs </p>
        <h1 class="menu-item-price">$14</h1>
        </div>
        <h2 inline>truffle mac</h2>
        <p>gruyere and new york cheddar, grana padana, truffle, panko</p>
        <h1 class="menu-item-price inline">&nbsp;&nbsp;$18</h2>
        </div>
        <div class="food-item">
        <h2>lobster bao</h2>
        <p>maine lobster, asian slaw, hoisin, cilantro, mint, bao bun</p>
        <h1 class="menu-item-price">$22</h3>
        </div>
            <div class="food-item">
        <h2>shrimp elote</h2>
        <p>grilled shrimp, heirloom baby tomatoes, summer corn, pickled red onions, elote puree, micro cilantro</p>
        <h1 class="menu-item-price">$16</h1>
        </div>
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
    } else if (e.target.id === "bar") {
        showBar()
    } else if (e.target.id === "starters") {
        showStarters()
    } else if (e.target.id === "salads") {
        showSalads()
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

