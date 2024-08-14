let myshop = document.getElementById('shop')
console.log(myshop)

let basket = []
let productShop = [
    {
        id: 'wrwerwrw',
        name: 'Causual Shirt',
        img: './images/img-1.jpg',
        desc: 'A very nice shirt for male outfit',
        price: 80000
    },
    {
        id: 'hfhfhfh',
        name: 'Causual Shirt',
        img: './images/img-2.jpg',
        desc: 'A very nice shirt for male outfit',
        price: 45000
    },
    {
        id: 'tututu',
        name: 'Causual Shirt',
        img: './images/img-3.jpg',
        desc: 'A very nice shirt for male outfit',
        price: 6000
    },
    {
        id: 'pupupu',
        name: 'Causual Shirt',
        img: './images/img-4.jpg',
        desc: 'A very nice shirt for male outfit',
        price: 9000
    },
    {
        id: 'hohohoh',
        name: 'Causual Shirt',
        img: './images/img-5.png',
        desc: 'A very nice shirt for male outfit',
        price: 15000
    },
    {
        id: 'jpjpjpjp',
        name: 'Causual Shirt',
        img: './images/img-6.png',
        desc: 'A very nice shirt for male outfit',
        price: 85000
    },
    {
        id: 'zuzuzuz',
        name: 'Causual Shirt',
        img: './images/img-7.png',
        desc: 'A very nice shirt for male outfit',
        price: 25000
    },
]



let shopData = () => {

    

  return(
    myshop.innerHTML= productShop.map((x) => {
        let {id, img, desc, price, name} = x
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
                               <span id=${id}>0</span>
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
 

    console.log(basket)
    update(selected.id)
}

let decrease = (id) => {
    let selected = id
    // console.log(selected.id)
    let search = basket.find((x) => x.id === selected.id)
    // console.log(search)
    if(search.item === 0)return;
   else{
        search.item -= 1
    }
 
    console.log(basket)
    update(selected.id)
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