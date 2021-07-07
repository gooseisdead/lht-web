const cocktails = `<div class="cocktail-item">
<h2>cocktail item</h2>
<p class="ings">booze, booze, booze</p>
<p class="menu-item-price">$12</p>
</div>
<br>
<div class="cocktail-item">
<h2>cocktail item</h2>
<p class="ings">booze, booze, booze</p>
<p class="menu-item-price">$12</p>
</div>
<br>
<div class="cocktail-item">
<h2>cocktail item</h2>
<p class="ings">booze, booze, booze</p>
<p class="menu-item-price">$12</p>
</div>
<br>
<div class="cocktail-item">
<h2>cocktail item</h2>
<p class="ings">booze, booze, booze</p>
<p class="menu-item-price">$12</p>
</div><br>
<div class="cocktail-item">
<h2>cocktail item</h2>
<p class="ings">booze, booze, booze</p>
<p class="menu-item-price">$12</p>
</div>
<br>
<div class="cocktail-item">
<h2>cocktail item</h2>
<p class="ings">booze, booze, booze</p>
<p class="menu-item-price">$12</p>
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


function showBrunch() {
    shownMenuItems.innerHTML = 
        `<p>brunch</p> `
}

function showCocktails() {
    shownMenuItems.innerHTML = cocktails
    
}

function showBeer() {
    shownMenuItems.innerHTML = 
        `<p>beers</p> `
}

function showFood() {
    shownMenuItems.innerHTML = 
        `<div class="food-item">
        <h2>our famous wings</h2>
        <p class="sauces">mild • medium • hot • nuclear • ass-burner • teriyaki • bbq • cajun</p>
        <p class="sides">served with celery sticks & blue cheese</p>
        <p>10 pc </p><p class="menu-item-price">$14</p>
        <p>20 pc </p><p class="menu-item-price">$22</p>
        </div>`
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





