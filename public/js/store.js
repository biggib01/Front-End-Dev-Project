var keep = "";
var addInCartItem = document.getElementsByClassName('bi-cart3')
console.log(addInCartItem)
for(var i = 0; i < addInCartItem.length; i++){
    var button = addInCartItem[i]
    button.addEventListener('click', function(event) {
        console.log('Clicked')
        var select = document.getElementById('idTable');
        var selected = [...select.selectedOptions]
                        .map(option => option.value);
        var select1 = document.getElementById('numberTable');
        var selected1 = [...select1.selectedOptions]
                        .map(option => option.value);
        keep = selected+selected1;
        //document.getElementById("table").innerHTML = "Your table number: "+"<u>"+selected+selected1+"</u>";

        return keep;
    })
}