
$(document).ready(function(){
 
$(document).on("click",'.btnSup', supprimerItem);
  
$(".fancyImg").fancybox({
    transitionIn: "elastic",
    speedIn: 1000
});    

 });

function supprimerItem(){
 var item=$(this).attr('value');
 var prix =Number($(this).parentsUntil(".itemPanier").find(".prixItem").text());
 var quant =Number($(this).parentsUntil(".itemPanier").find(".quantItem").text());
 var totalActual= Number($("#total").text());  
 var total= totalActual-(prix*quant);
 $("#total").text(total);
 sessionStorage.removeItem(item);
 $(this).parentsUntil("#panier").remove();
 } 
 


// drag and drop

function drag(e){
    e.dataTransfer.setData("text", e.target.id);
     var data = e.dataTransfer.getData("text");
    
}
function allowDrop(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  var img= document.getElementById(data).src;
  var titre= ($("#"+data).parentsUntil(".produitsli").find(".titre").text());
  
  var precio=Number($("#"+data).parentsUntil(".produitsli").find(".prix").text());
  var q= 1;
  if(sessionStorage.getItem(data)){
     q=Number(sessionStorage.getItem(data))+1;
     sessionStorage.setItem(data,q);
     $("#q"+data).text(q);
  }
 else{
 $("#panier").append("<div class='row itemPanier' id='itemm'>\n\
                         <div class='col-sm-5 imgItemPanier'>\n\
                         <img src="+img+" class='img-fluid' id='i"+data+"'>\n\
                         </div>\n\
                         <div class='col-sm-7 txtItemPanier'>\n\
                         <li class='renglonItem' id='titre' >"+titre+" </li>\n\
                         <li class='renglonItem quantItem' id='q"+data+"'>"+q+"</li>\n\
                         <li class='renglonItem prixItem' id='p"+data+"'>"+precio+"</li>\n\
                         <li class='renglonItem'><button class='btnSup' id='boton"+data+"' value="+data+"  >Supprimer</button></li>\n\
                         </div></div>");
        sessionStorage.setItem(data,1);
    }
actualizarTotal(precio); 
}

// update panier


function actualizarTotal(prix){
  var totalActual= Number($("#total").text());  
  var total= totalActual+prix;
  $("#total").text(total);
    
}
                                    
function borrarCarrito(){
    sessionStorage.clear();
}                                    
                                      
                                       
                               