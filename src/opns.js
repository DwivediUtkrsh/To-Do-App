var pleaseAddDiv = document.querySelector(".pleaseAdd")
    var msg = ""
    if(todos.length == 0){ 
        pleaseAddDiv.style.display = "none"
    }else if(todos.length !== 0){
        pleaseAddDiv.style.display = "initial"
    }