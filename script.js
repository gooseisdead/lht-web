const menuSection = document.querySelector(".menu-section")
const menuRow =  document.querySelector(".menu-tab-content")
const menuItems =  [
        {
          "id": 1,
          "name": "food",
          "description": "classic burger with toppings",
          "price": 33,
          "menu": "dinner"
        },
        {
          "id": 2,
          "name": "drugs",
          "price": 34,
          "menu": "brunch"
        },
        {
          "id": 3,
          "name": "apples",
          "price": 35,
          "menu": "beer"
    }]

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

// document.addEventListener("click", function(e) {
//     if (e.target.closest(".menu-tab-item")) {
//         renderAllMenuItems(menuItems);
//     }
//     console.log("working")
// })

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

const menuTabs = document.querySelector(".menu-tabs")
menuTabs.addEventListener("click", function(e) {
    if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("data-target")
        console.log(target)
    }
})

// function renderMenu(menuItem) {
//     const menuCard = document.createElement("div")
//     menuCard.classList.add("menu-item")
//     menuCard.innerHTML = `
//       <h3>${menuItem.name}</h3>
//       <h6>${menuItem.description}</h6>
//       <p>${menuItem.price}</p>`
//     menuRow.append(menuCard)
//   }
  
//   function renderAllMenuItems(menuArray) {
//     menuArray.forEach(renderMenu)
//   }

