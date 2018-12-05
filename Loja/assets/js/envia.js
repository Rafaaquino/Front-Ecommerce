var enviarDados = function(ev) {
ev.preventDefault();

	

    
      var email =  document.getElementById('email').value;
      var nome =  document.getElementById('nome').value;
      var senha = document.getElementById('senha').value;
      var cpf = document.getElementById('cpf').value;
      var celular = document.getElementById('celular').value;
      var cep = document.getElementById('cep').value;
      var bairro = document.getElementById('bairro').value;
      var rua = document.getElementById('rua').value;
      var cidade = document.getElementById('cidade').value;
      var numero = document.getElementById('numero').value;



        if (nome == null || nome == "") {
          	alert("preencha o nome!");
        }
        else if(email == null || email == ""){
        	alert("preencha o email!");
        }
        else if(senha == null || senha == ""){
        	alert("preencha a senha!");
        }
        else if(cpf == null || cpf == ""){
        	alert("preencha o CPF!");
        }
        else if(celular == null || celular == ""){
        	alert("preencha o celular!");
        }
        else if(cep == null || cep == ""){
        	alert("preencha o CEP!");
        }
        else if(bairro == null || bairro == ""){
        	alert("preencha o bairro!");
        }
        else if(rua == null || rua == ""){
        	alert("preencha o endereço!");
        }
        else if(cidade == null || cidade == ""){
        	alert("preencha a cidade!");
        }
        else if(numero == null || numero == ""){
        	alert("preencha o numero!");
        }
        else{

        	var bearer = "";
		    var acesso = "";

        	localStorage.setItem('usuario', JSON.stringify(email));
     		localStorage.setItem('nome', JSON.stringify(nome));
      
     		var address = '{"'+ 
				  'address":"' + document.getElementById('rua').value + 
				  '", "' +
				  'street":"' + " - " + 
				  '", "' +
				  'number":"' + document.getElementById('numero').value + 
				  '", "' +
				  'neighborhood":"' + document.getElementById('cidade').value + 
				  '", "' +
				  'city":"' + document.getElementById('bairro').value + 
				  '", "' +
				  'state":"' + document.getElementById('uf').value + 
				  '", "' +
				  'cep":"' + document.getElementById('cep').value + 
				  '"';

			var addresss = [address];

			var dataStr = '{"'+
				  'name":"'+ document.getElementById('nome').value + 
				  '", "'+
				  'email":"' + document.getElementById('email').value + 
				  '", "' +
				  'password":"' + document.getElementById('senha').value + 
				  '", "' +
				  'dateBirth":"' + document.getElementById('data').value + 
				  '", "' +
				  'sex":"' + document.getElementById('sexo').value + 
				  '", "' +
				  'cpf":"' + document.getElementById('cpf').value + 
				  '", "' +
				  'phone":"' + document.getElementById('telefone').value + 
				  '", "' +
				  'address":[' + addresss +  
				'}]}';
				 				  

				var data = JSON.parse(dataStr);
					    
						
				var XHR = new XMLHttpRequest();

				var url = 'http://webaquino.com.br';
				var body = '<?xml version="1.0"?><person><name>Arun</name></person>';


				XHR.addEventListener('load', function(event) {

					var response = XHR.responseText;

					var resposta = JSON.parse(response);

					console.log(resposta);


					if (resposta.sucess) {


						var imprime = JSON.parse(response);

						bearer = "Bearer "+imprime.response;


						localStorage.setItem('token', bearer);

						localStorage.setItem('usuario', JSON.stringify(email));
				      	localStorage.setItem('nome', JSON.stringify(nome));

				      	$('#modalSucesso').modal('toggle');
						
						setTimeout(function (){window.location.href = "endereco-entrega.html";}, 5000);
					}
					else{
						$('#modalErro').modal('toggle');
					}


					
					//setTimeout(function (){window.location.href = "endereco-entrega.html";}, 5000);
				});

				XHR.addEventListener('error', function(event) {
					$('#modalErro').modal('toggle');
				});

				XHR.open('POST', 'http://mandanode.herokuapp.com/mandanode/user/create');

				// header HTTP para dados de formulário POST
				XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

				// Finally, send our data.
				XHR.send(dataStr);

        }
}

