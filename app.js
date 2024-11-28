//NOTA:
//el GET ES IGUAL QUE DELETE Y POST IGUAL QUE PUT
const apiURL = "http://localhost/chat-bot/api.php"
const apiYesNo= "https://yesno.wtf/api"
 //FUNCION YES NO
 async function YesData(){
    console.log('Ingreso API Yes No ');
    try{
        const respuesta = await fetch(`${apiYesNo}`,{
            
            method: 'GET'
        });
        const data = await respuesta.json();
        console.log('data');
        console.log(data);
        // console.log(data.answer)
        // agregarMensaje(data.answer, data.answer=='no'?true:false);// agregamos esto cl chat api YES NO
        // agregarMensaje(data.answer, false);
        console.log("Aqui se muestra:")
        agregarMensaje(data.answer, false, data.image);

    }catch (error){
        console.log("Error al momento de hacer la petición GET", error);
        
;
    }
}


let btnYes = document.querySelector('#btnYesno');
btnYes.addEventListener('click',function(){
YesData();
});
//FUNCION GET
async function getData(){
    console.log('Ingreso a get data');
    try{
        const respuesta = await fetch(`${apiURL}?id=123&nombre=Milagros&apellido=Churata`,{
            
            method: 'GET'
        });
        const data = await respuesta.json();
        console.log('data');
        console.log(data);
    }catch (error){
        console.log("Error al momento de hacer la petición GET", error);

    }
}

let btnGet = document.querySelector('#getdata');
btnGet.addEventListener('click',function(){
getData();
});
//FUNCION POST
async function postData(){
    try {
        const respuesta = await fetch(`${apiURL}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // indicamos que el tipo de respuesta en este caso json
            },
            body: JSON.stringify({                 //en POST el contenido NO va en una URL va en el CUERPO
                nombre: 'Milagros Camila',
                apellido: 'Churata Ordoñez',
                lenguaje_favorito:"Javascript",
                id:'251003'
            })
        });
        const data_retorno = await respuesta.json();//conviertiendo la respuesta en una JSON
        // console.log('data POST');
        console.log(data_retorno);
        
    } catch (error) {
        console.log("Error al momento de hacer la petición POST", error);  //imprimimos el error en caso de que haya un error al hacer la peticion POST.
        
    }
}

let btnPost = document.querySelector('#postdata');//llamamos al ID del boton
btnPost.addEventListener('click',function(){//le damos la funcion al boton cuando se haga click
    postData();
    // alert('Ingreso aquiiiiii');

});

//FUNCION PUT
async function putData(){
    try {
        const respuesta = await fetch(`${apiURL}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // indicamos que el tipo de respuesta en este caso json
            },
            body: JSON.stringify({                 
                nombre: 'Camila',
                apellido: 'Ordoñez',
                lenguaje_favorito:"Javascript",
                id:'251003'
            })
        });
        const data_entrante = await respuesta.json();//conviertiendo la respuesta en una JSON
        // console.log('data POST');
        console.log(data_entrante );
        
    } catch (error) {
        console.log("Error al momento de hacer la petición PUT", error);  //imprimimos el error en caso de que haya un error al hacer la peticion PUT.
        
    }
}

let btnPut = document.querySelector('#putdata');//llamamos al ID del boton
btnPut.addEventListener('click',function(){//le damos la funcion al boton cuando se haga click
    putData();
    // alert('Ingreso aquiiiiii');

});

//FUNCION DELETE
async function deleteData() {
    console.log('Ingreso a delete data');
    try {
        const respuesta = await fetch(`${apiURL}?id=123`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await respuesta.json();
        console.log('data');
        console.log(data);
    } catch (error) {
        console.log("Error al momento de hacer la petición DELETE", error);
    }
}

let btnDelete = document.querySelector('#deletedata');
btnDelete.addEventListener('click', function() {
    deleteData();
});

//funcionalidad del chatyes no 
let chatMessages = document.getElementById('chatMessages'); //Capturamos el Div de HTML 
let chatForm = document.getElementById('chatForm');
let messageInput = document.getElementById('messageInput');

function agregarMensaje(mensaje, soyYo = true, imagen = null){//esta funcion crea las burbujas del chat y recibe 3 parametros si soy yo el que escribe y true es un valor por default
    const mensajeDiv = document.createElement('div');// Creamos un DIV directo y ya no en html
    mensajeDiv.classList.add('message');//classList es para agregar una clase y le ponemos el ombre de una clase que creamos en style
    mensajeDiv.classList.add(soyYo? 'user-message':'api-message'); //Agregamos un valor ternario si es true se va a user ysi es false se va a API
    mensajeDiv.textContent = mensaje; // le da contenido al formato de mensaje
     
    if (imagen){
        const img = document.createElement('img');//creamos imagen 
        img.src = imagen;
        mensajeDiv.appendChild(img);
     }
     setTimeout(() => {chatMessages.scrollTop = chatMessages.scrollHeight //sirve para que no se quede arriba y baje con normalidad
        
     },500);

    chatMessages.appendChild(mensajeDiv);//llamamos a variale y le agregmos el DIV 
}
//agregarMensaje("Hola soy Milagros");// el formato para el mensaje solo para probar
chatForm.addEventListener('submit',function(e){
    e.preventDefault();
    const miMensaje = messageInput.value;
    agregarMensaje(miMensaje,true)
    messageInput.value = ''; //limpiamos el input para que no siga escribiendo
    YesData(); // llamamos a la funcion de YESNO para que cuando envie un texto te responda
});
//tarea como hacer que cunado escrbas se quede en blanco
