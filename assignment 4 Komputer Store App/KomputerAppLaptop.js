const laptopsElement = document.getElementById("laptops");
const specsElement = document.getElementById("specs");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const priceElement = document.getElementById("price");
const imageElement = document.getElementById("image");
const stockElement = document.getElementById("stock");
const buyElement = document.getElementById("buy");

let laptops = [];
selectedLaptopprice = 0;


/* Function to fetch the komputer api */
fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToMenu(laptops));

/* Function to add laptops to the dropdown menu and add the initial informatation */
function addLaptopsToMenu(laptops){
    laptops.forEach(x => addLaptopToMenu(x));
    specsElement.innerText= laptops[0].specs;
    titleElement.innerText= laptops[0].title;
    descriptionElement.innerText= laptops[0].description;
    priceElement.innerText= 'price: ' + '€ ' + laptops[0].price;
    stockElement.innerText= 'stock: ' + laptops[0].stock;
    image.src = 'https://noroff-komputer-store-api.herokuapp.com/' + laptops[0].image;
    selectedLaptopprice = laptops[0].price;
}

/* Function to add one laptop to the addlaptopstomenu functions */
function addLaptopToMenu(laptop){
    const laptopElement = document.createElement("option");
    laptopElement.value = laptop.id;
    laptopElement.appendChild(document.createTextNode(laptop.title));
    laptopsElement.appendChild(laptopElement);
}

/* Function to change the informatation to the current selected laptop */
function handleLaptopInformationChange(e){
    const selectedLaptop = laptops[e.target.selectedIndex];
    specsElement.innerText = selectedLaptop.specs;
    titleElement.innerText = selectedLaptop.title;
    descriptionElement.innerText = selectedLaptop.description;
    priceElement.innerText = 'price: ' + '€ ' + selectedLaptop.price;
    stockElement.innerText = 'stock: ' + selectedLaptop.stock;
    image.src = 'https://noroff-komputer-store-api.herokuapp.com/assets/images/' + selectedLaptop.id + '.jpg';
    image.onerror = function(){
    image.src = 'https://noroff-komputer-store-api.herokuapp.com/assets/images/' + selectedLaptop.id + '.png';   
    }  
    selectedLaptopprice = selectedLaptop.price;
}

/* function to buy al laptop */
function buyLaptop(){     
    console.log(selectedLaptopprice) 
    if(selectedLaptopprice > loan.currentTotalBalance){
        alert('You cannot afford this laptop')               
    }
    else{      
        loan.currentTotalBalance = parseInt(loan.currentTotalBalance) - parseInt(selectedLaptopprice);      
        alert('You bought a loptop')
        setInfomationBank()
        setInfomationLoan()          
    }

}
   
laptopsElement.addEventListener("change", handleLaptopInformationChange);
buyElement.addEventListener("click", buyLaptop);



