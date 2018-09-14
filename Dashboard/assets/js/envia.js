function enviarDados(){
	var nome = document.getElementById('nome').value;
	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;
	var data = document.getElementById('data').value;
	var sexo = document.getElementById('sexo').value;
	var cpf = document.getElementById('cpf').value;
	var telefone = document.getElementById('telefone').value;
	var celular = document.getElementById('celular').value;
	var endereco = document.getElementById('endereco').value;
	var numero = document.getElementById('numero').value;
	var cidade = document.getElementById('cidade').value;
	var bairro = document.getElementById('bairro').value;
	var estado = document.getElementById('estado').value;
	var cep = document.getElementById('cep').value;

		    
	    alert(nome);
};




xhr = new XMLHttpRequest ();  
var url = "https://mandanode.herokuapp.com/mandanode/product/create" ; 
xhr . aberto ( "POST" , url , true ); 
xhr . setRequestHeader ( "Content-type" , "application / json" ); 
xhr . onreadystatechange = function () {    
    se ( XHR . readyState == 4 && xhr . estatuto == 200 ) {     
        var json = JSON . parse ( xhr . responseText );
        console . log ( json . email + "," + json . name )  
    }
}
var data = JSON . stringify ({ "email" : "tomb@raider.com" , "nome" : "LaraCroft" });
xhr . enviar ( dados );


