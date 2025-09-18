function generatetable(){
    console.log("hello")
    var number = document.getElementById('tablenumber').value
    var quantity = document.getElementById('quantity').value
    var resultdiv = document.getElementById('result');
    
    resultdiv.innerHTML="";
    number=parseInt(number);
    quantity=parseInt(quantity);
    
    if(number === "" || quantity===""){
        resultdiv.innerText = "PLEASE ENTER YOUR NUMBER AND QUANTITY";
    }
    for(var i=1 ; i <=quantity ;i++){
        var line= number + "x" + i + "=" + (number*i);
        resultdiv.innerHTML += line + "<br>";
    }

}