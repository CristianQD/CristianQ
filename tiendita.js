

 let total=0, subtotal,resp="SI";

while(resp.toUpperCase()=="SI"){
let prod=prompt("cuantos productos vas a comprar");
for (i=0; i<prod; i++){
subtotal=parseInt(prompt("indresa el sub total de producto:"+(i+1))+" $ ");
total+=subtotal;


}
alert("El total de la compra es $"+total);
total=0;
resp=prompt("Deseas realisas otra compra");
}