//section1
var addElement=document.getElementById("addItem");
console.log(addElement);

var itemList;

if (localStorage.getItem("product" == null)) {
    itemList= [];
}
else {
    itemList = JSON.parse(localStorage.getItem("product"));
    
}


function addItems(){
    var item ={
        name:addElement.value,   
    }
    itemList.push(item);
    localStorage.setItem("product",JSON.stringify(itemList));
    displayItems();
    clearItem()

}
function displayItems(){
    var cartonaa="";
    for(var i=0;i<itemList.length;i++){
        cartonaa +=`<div>
        <input class="form-control d-inline w-50 " value="${itemList[i].name}">
        <a onclick="deleteItem(${i})" class="btn btn-danger  p-2">x</a>
        </div>`

    }
    document.getElementById('add').innerHTML = cartonaa;
}
function clearItem(){
    addElement.value="";

}


function deleteItem(index){
    itemList.splice(index,1);
    //display ItemList after deleting index
    localStorage.setItem("product", JSON.stringify(itemList));
    displayItems();
    console.log(itemList);
    }