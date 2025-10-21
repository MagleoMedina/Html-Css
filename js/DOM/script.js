
        let cabecero = document.getElementById('cabecero');//no colocar aqui inner.HTML
        console.log(cabecero.innerHTML);
        //Reemplazar el content 
        cabecero.innerHTML = "Bansai";

        let parrafo = document.getElementById("parrafo");
        console.log("parrafo dom " + parrafo.innerHTML);

        let parrafos = document.getElementsByTagName("p");
        console.log("parrafos dom " + parrafos.length);

        for(let pr of parrafos){
            console.log( "los parrafos son: "+ pr.innerHTML);
        }

        let className = document.getElementsByClassName("azul");
        for (const cn of className) {
            console.log(" Los azules son : " + cn.innerHTML);
        }

        let classNameQ = document.querySelectorAll("h1.azul");
        console.log("El largo del query selector es = "+classNameQ.length);

function mostrarValores(){
            let formulario = document.forms["formulario"];
            let texto = "";
            for(fr of formulario){
                if(fr.type != "fieldset"){
                   texto += fr.value + "<br>";
                }
                
            }
            console.log(texto);
            let valoresDiv = document.getElementById("valores");
            valoresDiv.innerHTML = texto;
        }   

const gpt = (id,str) =>{
    
    return document.getElementById(id).innerHTML = str;
};
function mostrarValores2(){
    let formulario2 = document.forms["formulario"];
    let name = formulario2["nombre"];
    let lastname = formulario2["apellido"];
    let tex = name.value + " <hr/>"+ lastname.value;

    document.getElementById("valores").innerHTML = tex;
    
    gpt("cabecero","machete");
    document.getElementById("imagen").src = "https://placehold.co/400";
    document.getElementById("body").style.backgroundColor = "purple";

}
