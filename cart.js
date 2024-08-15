
let label = document.getElementById('label')
let shoppingcart = document.getElementById('shoppingcart')
let basket = JSON.parse(localStorage.getItem('data')) || []
let mycart = () => {
    // console.log('cart')
    let cartIcon = document.getElementById('cartamount')
    cartIcon.innerHTML=basket.map((x) => x.item).reduce((prev, next) => prev + next, 0)
    // console.log(search)


}
mycart()


console.log(basket)

let generateCart = () => {
    if(basket.length !==0 ){
        shoppingcart.innerHTML = basket.map((x) => {
            let {id, item} = x
            let search = productShop.find((y) => y.id === id)
            return(
               `<div>
               <img width="100" src=${search.img} alt />
               <div class="details">
              
               <h3>
               <p>${search.name}</p>
                 <p>#${search.price}</p>
                 <span>X</span>
               </h3>

               </div>
                     <div>
                               <span onclick="decrease(${id})"><i class="bi bi-dash-lg"></i></span>
                               <span id=${id}>${item}</span>
                               <span onclick="increase(${id})"><i class="bi bi-plus-lg"></i></span>
                           </div>

                           <h4>${item * search.price}</h4>
               </div>
              
               ` 
            )
        })
    }else{
      label.innerHTML =  `
        <div>
            <h3>Cart is Empty</h3>
            <a href="./index.html">Go back Home</a>
        </div>
        `
    }

}
generateCart()



let increase = (id) => {
    let selected = id
    // console.log(selected.id)
    let search = basket.find((x) => x.id === selected.id)
    // console.log(search)
    if (search === undefined){
        basket.push({
            id: selected.id,
            item: 1
        })
    }else{
        search.item += 1
    }
    
 
    console.log(basket)
    generateCart()
    update(selected.id)
    
    localStorage.setItem('data', JSON.stringify(basket))
}

let decrease = (id) => {
    let selected = id
    // console.log(selected.id)
    let search = basket.find((x) => x.id === selected.id)
    // console.log(search)
    if (search === undefined) return;
    if(search.item === 0)return;
   else{
        search.item -= 1
    }
    generateCart()
    update(selected.id)
    basket = basket.filter((x) => x.item !== 0)
   
    localStorage.setItem('data', JSON.stringify(basket))
 
    console.log(basket)
    
}



let update = (id) => {
    console.log(id)

    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML= search.item
    mycart()
}
