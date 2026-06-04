const products = [

{
id:1,
category:"Smartphones",
name:"iPhone 17 Pro",
price:129999,
rating:"⭐⭐⭐⭐⭐",
image:"iphone17pro.jpg"
},

{
id:2,
category:"Smartphones",
name:"Samsung Galaxy S24",
price:74999,
rating:"⭐⭐⭐⭐⭐",
image:"s24.jpg"
},

{
id:3,
category:"Smartphones",
name:"Samsung Galaxy S24 Ultra",
price:119999,
rating:"⭐⭐⭐⭐⭐",
image:"s24ultra.jpg"
},

{
id:4,
category:"Smartphones",
name:"Samsung Galaxy S23",
price:64999,
rating:"⭐⭐⭐⭐⭐",
image:"s23.jpg"
},

{
id:5,
category:"Smartphones",
name:"Vivo X200 Pro",
price:84999,
rating:"⭐⭐⭐⭐⭐",
image:"vivox200pro.jpg"
},

{
id:6,
category:"Smartphones",
name:"Xiaomi 15 Ultra",
price:79999,
rating:"⭐⭐⭐⭐⭐",
image:"xiaomi15ultra.jpg"
},

{
id:7,
category:"Smartphones",
name:"Oppo Find X8 Pro",
price:89999,
rating:"⭐⭐⭐⭐⭐",
image:"oppofindx8pro.jpg"
},

{
id:8,
category:"Laptops",
name:"MacBook Pro M4",
price:169999,
rating:"⭐⭐⭐⭐⭐",
image:"macbookm4.jpg"
},

{
id:9,
category:"Laptops",
name:"Dell XPS 15",
price:149999,
rating:"⭐⭐⭐⭐⭐",
image:"dellxps15.jpg"
},

{
id:10,
category:"Laptops",
name:"HP Spectre x360",
price:139999,
rating:"⭐⭐⭐⭐⭐",
image:"hpspectre.jpg"
},

{
id:11,
category:"Laptops",
name:"Lenovo Legion 5",
price:119999,
rating:"⭐⭐⭐⭐⭐",
image:"legion5.jpg"
},

{
id:12,
category:"Laptops",
name:"ASUS ROG Strix",
price:149999,
rating:"⭐⭐⭐⭐⭐",
image:"rogstrix.jpg"
},

,
{
id:13,
category:"Accessories",
name:"Wireless Earbuds",
price:2999,
rating:"⭐⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500"
},

{
id:14,
category:"Accessories",
name:"Bluetooth Speaker",
price:2499,
rating:"⭐⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500"
},

{
id:15,
category:"Accessories",
name:"Gaming Mouse",
price:999,
rating:"⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
},

{
id:16,
category:"Accessories",
name:"Mechanical Keyboard",
price:2999,
rating:"⭐⭐⭐⭐⭐",
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
}

];

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(items){

productContainer.innerHTML = "";

items.forEach(product => {

productContainer.innerHTML += `
<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<div class="rating">${product.rating}</div>

<p class="price">
₹${product.price.toLocaleString()}
</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>

</div>
`;

});

}

function addToCart(id){

const product = products.find(
item => item.id === id
);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();

}

function updateCart(){

const cartItems =
document.getElementById("cartItems");

const cartCount =
document.getElementById("cartCount");

const totalPrice =
document.getElementById("totalPrice");

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">

<h4>${item.name}</h4>

<p>₹${item.price.toLocaleString()}</p>

<button onclick="removeItem(${index})">
Remove
</button>

</div>
`;

});

cartCount.innerText = cart.length;

totalPrice.innerText =
total.toLocaleString();

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();

}

function toggleCart(){

document
.getElementById("cartSidebar")
.classList.toggle("active");

}

function filterCategory(category){

if(category === "All"){

displayProducts(products);

return;

}

const filteredProducts =
products.filter(product =>
product.category === category
);

displayProducts(filteredProducts);

}

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

const filteredProducts =
products.filter(product =>
product.name
.toLowerCase()
.includes(value)
);

displayProducts(filteredProducts);

});

displayProducts(products);

updateCart();