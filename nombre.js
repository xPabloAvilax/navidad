//var nombre= "Pablo";
//var apellido= "Avila";

//alert(nombre + " " + apellido)
document.getElementById("piramide").style.color = "green";
document.getElementById("piramide").style.textAlign = "center";
document.getElementById("piramide").style.fontSize= "50px";

var numeroRamas = parseInt(prompt("Ingrese numero de ramas de su arbol"));
var space;

   for (i=1; i<=numeroRamas; i++){
       space="";
       
        for (j=1; j<=numeroRamas-i; j++){
            space+=" "  
        }
        for(j=1; j<=2*i-1;j++){
            space+= "*"
        }
        document.write(space); 
        document.write("<br />"); 
    }
    for(i=0; i<3; i++){
        
        document.write("*")
        document.write("<br />");
       
    }
    

    
   
   
    




