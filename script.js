const cocktails = 
        `<div class="all-cocktails">
        <div class="cocktail-item">
            <h2>songbird won</h2>
            <p class="ings">empress gin, st. germaine elderflower, lime</p>
        </div>
        <br>
        <div class="cocktail-item">
            <h2>shy & humble</h2>
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




