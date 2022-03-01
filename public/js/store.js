var addInCartItem = document.getElementsByClassName('bi-cart3')
console.log(addInCartItem)
for(var i = 0; i < addInCartItem.length; i++){
    var button = addInCartItem[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target.value
        buttonClicked.parentElement
    })
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('')[0]
    var cartRows = cartItemContainer.getElementsByClassName('')
    for(var i = 0; i < cartRows.length; i++){
        var cartRow = cartRow[i]
        var priceElement = cartRow.getElementsByClassName('')[0]
        var quantityElement = cartRow.getElementsByClassName('')[0]
        
    }
}