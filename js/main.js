/*-------------- sticky navbar -----------------*/
window.onscroll = ()=> {
  let headerNavbar = document.querySelector('.navbar-area'),
      sticky = headerNavbar.offsetTop,
      logo = document.querySelector('.navbar-brand img');
  if(window.pageYOffset > sticky){
    headerNavbar.classList.add('sticky');
    logo.src = 'img/logo.png';
  } else {
    headerNavbar.classList.remove('sticky');
    logo.src = 'img/logo.png';
  }
}


/*-------------- shopping cart -----------------*/
// order 
let order = document.getElementsByClassName('order')[0];
order.onclick = ()=> {
  alert('Cảm ơn quý khách đã đặt hàng');
  let cartItems = document.getElementsByClassName('cart-items')[0];
  while(cartItems.hasChildNodes()){
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCart();
}
//remove item
let removeCartItem = document.getElementsByClassName('btn-danger'),
    removeCartItemLen = removeCartItem.length;
for(let i=0; i < removeCartItemLen; i++){
  let button = removeCartItem[i];
  button.addEventListener('click', ()=> {
    let buttonRemove = event.target;
    buttonRemove.parentElement.parentElement.parentElement.remove();
    updateCart();
  });
}

//update cart
function updateCart() {
  let cartList = document.getElementsByClassName('cart-items')[0],
      cartRows = cartList.getElementsByClassName('row-item'),
      cartRowsLen = cartRows.length,
      totalPrice = 0;
  for(let i=0; i < cartRowsLen; i++){
    let cartRow = cartRows[i],
        priceItem = cartRow.getElementsByClassName('cart-price')[0],
        quantityItem = cartRow.getElementsByClassName('cart-quantity-input')[0],
        price = parseFloat(priceItem.innerText),// chuyển string sang number để tính tổng
        quantity = quantityItem.value;// lấy value của input
    totalPrice = totalPrice + (price * quantity);
  }
  totalPrice = Math.round(totalPrice * 100) / 100;
  document.getElementById('badge-Sp-cart').innerHTML = cartRowsLen;
  document.getElementsByClassName('cart-total-price')[0].innerText = totalPrice + 'VND';// Thay đổi text = total trong .cart-total-price
}
updateCart();

//thay đổi số lượng sản phẩm
let quantityInput = document.getElementsByClassName('cart-quantity-input'),
    quantityInputLen = quantityInput.length;
for(let i=0; i < quantityInputLen; i++){
  let input = quantityInput[i];
  input.addEventListener('change', (event)=> {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
      input.value = 1;
    }
    updateCart();
  });
}

//add sản phẩm
let addCart = document.getElementsByClassName('btn-add-cart'),
    addCartLen = addCart.length;
for(let i=0; i < addCartLen; i++){
  let addProduct = addCart[i];
  addProduct.addEventListener('click', (event)=> {
    let button = event.target,
        product = button.parentElement.parentElement,
        img = product.parentElement.getElementsByClassName('img-product')[0].src,
        title = product.parentElement.getElementsByClassName('title-product')[0].innerText,
        price = product.parentElement.getElementsByClassName('price')[0].innerText;
    addItemToCart(title, img, price);
    updateCart();
    //console.log(addProduct)
  });
}
addItemToCart = (title, img, price) => {
  let cartProduct = document.createElement('div');
  cartProduct.classList.add('row', 'mt-3', 'pb-1', 'row-item');
  let cartItems = document.getElementsByClassName('cart-items')[0];
  let cartTitle = document.getElementsByClassName('cart-item-title'),
      cartTitleLen = cartTitle.length;
  for(let i=0; i < cartTitleLen; i++){
    if(cartTitle[i].innerText == title){
      alert('Sản phẩm đã có trong giỏ hàng')
      return
    }
  }

  let cartRowContents = `
    <div class="cart-item col-5 d-flex">
      <img class="cart-item-img" src="${img}" width="75"/>
      <span class="cart-item-title">${title}</span>
    </div>
    <div class="col-3 cart-price">${price}</div>
    <div class="col-4 d-flex cart-quantity">
      <input class="cart-quantity-input form-control" type="number" value="1"/>
      <button class="btn btn-danger" type="button">xóa</button>
    </div>
  `;
  cartProduct.innerHTML = cartRowContents;
  cartItems.append(cartProduct);
  cartProduct.getElementsByClassName('btn-danger')[0].addEventListener('click', ()=> {
    let buttonRemove = event.target;
    buttonRemove.parentElement.parentElement.remove();
    updateCart();
  });
  cartProduct.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', (event) => {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
      input.value = 1;
    }
    updateCart();
  });
}
console.log(addItemToCart());
/*------------ end shopping cart ------------*/

/*-------------- slider range -----------------*/
let slider = document.getElementById("myRange");
let output = document.getElementById("demo-text-range");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

/*-------------- click liked -----------------*/
const heart = document.querySelectorAll('.heart-click');
let heartLen = heart.length;
for(let i=0; i < heartLen; i++){
  heart[i].addEventListener('click', ()=> {
    heart[i].classList.toggle('red-heart');
  });
}

/*-------------- click circle color -----------------*/
const iconsColor = document.querySelectorAll('.icon-color');
let iconsColorLen = iconsColor.length;
for(let i=0; i < iconsColorLen; i++){
  iconsColor[i].addEventListener('click', ()=> {
    for(let j=0; j < iconsColorLen; j++){
      if(j !== i){
        iconsColor[j].style.opacity = '0'
      }
    }
    iconsColor[i].style.opacity = '1'
  });
}

/*-------------- click size -----------------*/
const sizeCircle = document.querySelectorAll('.size-circle');
let sizeCircleLen = sizeCircle.length;
for(let i=0; i < sizeCircleLen; i++){
  sizeCircle[i].addEventListener('click', ()=> {
    for(let j=0; j < sizeCircleLen; j++){
      if(j !== i){
        sizeCircle[j].style.border = '2px solid lightgray'
      }
    }
    sizeCircle[i].style.border = '3px solid black'
  });
}

/*-------------- click next page -----------------*/
const nextPage = document.querySelectorAll('.btn-next-page');
let nextPageLen = nextPage.length;
for(let i=0; i < nextPageLen; i++){
  nextPage[i].addEventListener('click', ()=> {
    for(let j=0; j < nextPageLen; j++){
      if(j !== i){
        nextPage[j].style.background = 'transparent'
      }
    }
    nextPage[i].style.background = 'purple'
  });
}