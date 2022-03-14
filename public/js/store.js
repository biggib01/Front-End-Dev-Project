const cart = []

async function addCart(id, event){
    const keep = document.getElementById("idTable").value
    const keep1 = document.getElementById("numberTable").value
    const table = keep+keep1;

    const main = document.getElementById(id);
    const foodName = main.children[1].children[0].innerText;
    const price = main.children[1].children[1].innerText;
    const foodQuantity = 1;
    const food = {name:foodName, quantity:foodQuantity, price:price}

    const orderList = document.getElementById("asd")

    const result = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            table,
            food
        })
    }).then((res)=> res.json(), console.log("Sended data"))

    // if(cart.length == 0){
        
        // let p = document.createElement("h3")
        // let br = document.createElement("br");
        // let tableID = document.createTextNode(String(table)+"\n")
        // let fname = document.createTextNode(String(food.name)+"\n")
        // let fprice = document.createTextNode(String(food.price)+" ")
        // let fquan = document.createTextNode(String(food.quantity)+" ")
        // console.log(fname, fprice, fquan);
        // p.appendChild(tableID)
        // p.appendChild(br)
        // p.appendChild(fname)
        // p.appendChild(fprice)
        // p.appendChild(fquan)
        // orderList.appendChild(p)
    // }else{
    //     var i = cart.length;
    //     while(i--) {
    //         if(foodName == cart[i].name) {
    //             cart[i].quantity ++;
    //             break;
    //         }else{
    //             cart.push(food)
    //             break;
    //         }
    //     }
    // }
    
    // document.write(
    //     "<div class='col-md-6 col-lg-4 col-xl-3' >"+
    //         "<div id='product-1' class='single-product'>"+
    //                 "<div class='part-1' style='background-image: url('https://fs.hut1150.com/pizzas/taco---island-delight-(hd-web)_taid-21012021075801.jpg');background-size: 140%;background-repeat: no-repeat;'>"+
    //                 "</div>"+
    //                 "<div class='part-2'>"+
    //                         "<h3 class='product-title'>"+food.name+"</h3>"+
    //                         "<h4 class='product-price'>"+food.price+"</h4>"+
    //                         "<h4 class='product-quantity'>"+food.quantity+"</h4>"+
    //                 "</div>"+
    //         "</div>"+
    //     "</div>")
    
}