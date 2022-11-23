var allproducts = document.querySelectorAll('#product')
var product = document.querySelector('#product');
var price = document.querySelector('#price');
var btn = document.querySelector('#buy');
var tprice = document.querySelector('#tPrice');
var products  =document.querySelector('#products') ;
var order  =document.querySelector('#order');
var totalPrice = 0;
var card = document.querySelector(".card-text")
allproducts.forEach(function(item){
    item.onclick = function (){
        totalPrice += parseInt(item.getAttribute("price"));
        order.style.display = "block";
        card.style.display="block";
        tprice.innerHTML = totalPrice
    
    

    }
})
