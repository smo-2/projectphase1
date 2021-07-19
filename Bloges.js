function addItem(list,inputFiled){
    var list =document.getElementById(list);
    var listItem =document.createElementById(li);
    listItem.innerText=inputFiled.value;
    listItem.innerHTML="<a>"+inputFiled.value 
    +"</a>"+'<br>'+"<input type='submit'class='btn btn-danger';>";
    list.appendchild(listItem);
    return false;

}