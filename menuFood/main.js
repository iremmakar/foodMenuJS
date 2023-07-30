import menu from "./db.js";

const menuContainer = document.querySelector("#menu-container");

document.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(
    (item) =>
      `
    <div
          class="food d-flex gap-2 mt-5 flex-column flex-md-row "
          
          id="card"
            >
          <img
            src="${item.img}"
            alt=""
            class=" shadow rounded w-100"
            
          />
          <div>
            <div class="d-flex justify-content-between border-bottom">
              <h5 class="">${item.title}</h5>
              <h5>${item.price}</h5>
            </div>
            <p class="pt-3 lead">
              ${item.desc}
            </p>
          </div>
        </div>
    
    `
  );
  displayMenu = displayMenu.join("");
  console.log(displayMenu);
  menuContainer.innerHTML = displayMenu;
}

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", searchCategory);
});

function searchCategory(e) {
  const category = e.target.dataset.id;

  const filteredMenu = menu.filter((items) => {
    if (items.category === category) {
      return items;
    }
  });

  if (category === "all") {
    displayMenuItems(menu);
  } else {
    displayMenuItems(filteredMenu);
  }
}
