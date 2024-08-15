let myshop = document.getElementById('shop')
console.log(myshop)

let basket = JSON.parse(localStorage.getItem('data')) || []




let shopData = () => {

    

  return(
    myshop.innerHTML= productShop.map((x) => {
        let {id, img, desc, price, name} = x
        let search = basket.find((x)=> x.id == id) || []
        return(
            `
            <div id=prodt-id-${id} class="item">
                   <img src=${img} alt="">
                   <h1>${name}</h1>
                   <p>${desc}</p>
                   <div class="cartdetails">
                       <div>
                           <h3>&#x20A6; ${price}</h3>
                           <div>
                               <span onclick="decrease(${id})"><i class="bi bi-dash-lg"></i></span>
                               <span id=${id}>${search.item === undefined ?  0 :search.item }</span>
                               <span onclick="increase(${id})"><i class="bi bi-plus-lg"></i></span>
                           </div>
        
                       </div>
                   </div>
        
        
               </div>
           
           
           `
        )
    }).join('')
  )
}
shopData()


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
    localStorage.setItem('data', JSON.stringify(basket))

    console.log(basket)
    update(selected.id)
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

let mycart = () => {
    // console.log('cart')
    let cartIcon = document.getElementById('cartamount')
    cartIcon.innerHTML=basket.map((x) => x.item).reduce((prev, next) => prev + next, 0)
    // console.log(search)


}
mycart()

// let tunde = new Date
// console.log(tunde)