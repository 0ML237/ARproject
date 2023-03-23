function renderMenuItem(menu, liste, descriptionElement, selectedProduitCallback) {
  const box = document.createElement("div");
  box.classList.add("box");
  const dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("dropdown-container");
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  const spanLeft = document.createElement("span");
  spanLeft.classList.add("left-icon");
  const spanRight = document.createElement("span");
  spanRight.classList.add("right-icon");
  const items = document.createElement("div");
  items.classList.add("items");

  dropdown.innerText = menu.name;
  dropdown.appendChild(spanLeft);
  dropdown.appendChild(spanRight);
  dropdownContainer.appendChild(dropdown);
  box.id = menu.id;
  box.appendChild(dropdownContainer);
  liste.appendChild(box);


  //afin de boucler dans une boucle

  let produits = [].slice.call(menu.produit);
  produits.forEach((produit, i) => {
    const item = document.createElement("a");
    item.style = "--i:" + i + ";";
    const spann = document.createElement("span");
    const name = produit.name;
    //console.log(description);

    item.classList.add("vod");
    item.appendChild(spann);
    item.innerText = produit.name;
    items.appendChild(item);
    dropdownContainer.appendChild(items);

    item.addEventListener("click", () => {

        selectedProduitCallback(produit);

        descriptionElement.style.position = "relative";
    });
  });
}










      /*console.log(produit.name);
      console.log("produit.name");
      let plats = [].slice.call(produit.plats);
      plats.forEach((plat) => {
        const currentSrc = plat.src;
        const currentDescription = plat.description;
        const currentName = plat.name;

        platArea.push({ currentSrc, currentName, currentDescription });
      });*/

    //   console.log(platArea);
    //   console.log("platArea");

    //   platArea = [];
