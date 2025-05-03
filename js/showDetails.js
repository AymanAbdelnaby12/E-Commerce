document.addEventListener("DOMContentLoaded", async function() {

const params = new URLSearchParams(window.location.search);
const productId = params.get("id"); 


let response = await fetch('https://fakestoreapi.in/api/products');
let data = await response.json();
let products = data.products;
console.log(productId) 

let product = products.find(p => p.id == productId);
document.getElementById("img_product").src = product.image;
    document.getElementById("catogry_1").textContent = product.category;
    document.getElementById("catogry_2").textContent = product.category;
    document.getElementById("product_name2").textContent = product.title;
    document.getElementById("price").textContent = `${product.price} $`;
    document.getElementById("name").textContent = product.title.split(" ").slice(0, 2).join(" ");
    document.getElementById("catogry").textContent = product.category;
    document.getElementById("description").textContent = product.description;
    document.getElementById("img-disc").src = product.image;
    var element = document.getElementById("related-products");
    var body = document.getElementById("tableBody");

    function addToTabble(product,ProductId){
        let data="";
        
            data += `
            <tr>
                <td colspan="2" >Color : ${product[productId-1].color}</td>
            <tr> 
            <tr> 
                <td colspan="6">Model : ${product[productId-1].model}</td> 
            <tr> 
            <tr> 
                <td colspan="2">Size : ${product[productId-1].category}</td>
            <tr> 
            
            ` 
        
        document.getElementById("tableBody").innerHTML = data;
}
addToTabble(products , productId);
function getRelatedProducts(productId) {
let relatedProducts ="";
for(let i=1; i <=3; i++){
    
    if(i != productId){
        relatedProducts +=`
        <div class="col-sm-4">
                <div class="card h-100">
                <img src="${products[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${products[i].title.split(" ").slice(0, 2).join(" ")}</h5>
                    <p class="card-text">Category : ${products[i].category}</p>
                    <p class="card-text">Price : ${products[i].price} $</p>
                    <button onclick="redirectToProductDetails(${products[i].id})" class="btn btn-primary">View Details</button>
                    
                </div>
                </div>
            </div>` 
    }
    else{
        relatedProducts +=`
        <div class="col-sm-4">
                <div class="card h-100">
                <img src="${products[4].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${products[i].title.split(" ").slice(0, 2).join(" ")}</h5>
                    <p class="card-text">Category : ${products[i].category}</p>
                    <p class="card-text">Price : ${products[i].price} $</p>
                    <button onclick="redirectToProductDetails(${products[i].id})" class="btn btn-primary">View Details</button>
                    
                </div>
                </div>
            </div>` 
    }
    document.getElementById("relatedproducts").innerHTML = relatedProducts;
    document.getElementById("relatedproduct").innerHTML = relatedProducts;
}
}
getRelatedProducts(productId);
});
function redirectToProductDetails(productId){ 
    window.location.href = `./show_details.html?id=${productId}`;  
    console.log(productId);
}  