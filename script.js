const menuCollectionDiv = document.querySelector(".menu-section")
const menuItems =  [
        {
          "id": 1,
          "name": "food",
          "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
          "price": 33
        },
        {
          "id": 2,
          "name": "food",
          "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
          "price": 34
        },
        {
          "id": 3,
          "name": "food",
          "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
          "price": 35
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

document.addEventListener("click", function(e) {
    if (e.target.closest(".menu-tab-item")) {
        renderAllMenuItems(menuItems);
    }
    console.log("working")
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

function renderMenu(menuItem) {
    const menuCard = document.querySelector(".menu-item")
    menuCard.innerHTML = `
      <img src=${menuItem.image} class="menu-avatar" />
      <h2>${menuItem.name}</h2>
      <p>${menuItem.price}</p>`
    menuCollectionDiv.append(menuCard)
  }
  
  function renderAllMenuItems(menuArray) {
    menuArray.forEach(renderMenu)
  }
