var tableId = "";
var addInCartItem = document.getElementsByClassName('bi-cart3')
for(var i = 0; i < addInCartItem.length; i++){
    var button = addInCartItem[i]
    button.addEventListener('click', function(event) {

        var idMenu = document.querySelector('#idMenu');
        console.log(idMenu)

    })
}