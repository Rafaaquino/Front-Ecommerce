var login = function() {




        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email1').value;
        var senha = document.getElementById('senha').value;


        if (nome == null || nome == "") {

          	alert("preencha o nome!");
        }
        else if(email == null || email == ""){
        	alert("preencha o email!");
        }
        else if(senha == null || senha == ""){
        	alert("preencha a senha!");
        }
        else{

	        var bearer = "";
		    var acesso = "";




			var dataStr = '{"'+
						  'email":"' + email + 
						  '", "' +
						  'password":"' + senha + 
						  '"}';
						 				  

			var data = JSON.parse(dataStr);
				    
					
			var XHR = new XMLHttpRequest();

			var url = 'http://webaquino.com.br';
			var body = '<?xml version="1.0"?><person><name>Arun</name></person>';


			XHR.addEventListener('load', function(event) {
				//$('#modalSucesso').modal('toggle');
			
			
			
			var response = XHR.responseText;

			console.log(response);

			var resposta = JSON.parse(response);

			console.log(resposta);

			if (resposta.sucess) {


				var imprime = JSON.parse(response);

				bearer = "Bearer "+imprime.response;
				acesso =  imprime.response.sucess;

				console.log(bearer);


				localStorage.setItem('token', bearer);

				localStorage.setItem('usuario', JSON.stringify(email));
		      	localStorage.setItem('nome', JSON.stringify(nome));
				
				setTimeout(function (){window.location.href = "endereco-entrega.html";}, 5000);
			}
			else{
				alert("Login Invalido!");
			}

			});

			
			XHR.addEventListener('error', function(event) {
				//$('#modalErro').modal('toggle');
				alert("Login Invalido!");
			});

			XHR.open('POST', 'http://mandanode.herokuapp.com/mandanode/user/login');

			// header HTTP para dados de formulário POST
			XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
			//XHR.setRequestHeader('Authotization', 'Basic ' + bearer);

			// Finally, send our data.
			XHR.send(dataStr);
        }

}

