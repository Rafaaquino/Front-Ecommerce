

function PreviewImage() { 

        

        var oFReader = new FileReader(); 
        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

        oFReader.onload = function (oFREvent) { 
            document.getElementById("uploadPreview").src = oFREvent.target.result;
            
            uploadImage();
        };
        
        
}

function uploadImage(){
      
 var idProduto = localStorage.getItem("idProduto");
  console.log(idProduto);


    // Captura os dados do formulário
  var uploadImage = $('#uploadImage')[0].files[0];

  // Instância o FormData passando como parâmetro o formulário
  var formData = new FormData();
  formData.append('image', uploadImage);
  console.log(uploadImage);
    // Envia O FormData através da requisição AJAX
  $.ajax({
     type: "POST",
     url: "http://mandanode.herokuapp.com/mandanode/product/insert/451",
     data: formData,
     processData: false,  
     contentType: false,
     success: function(retorno){

      console.log(retorno);
        var resposta = JSON.parse(retorno);

        console.log(resposta);

        if (resposta.sucess) {
          alert("img enviada");
        } 
        else {
          alert("erro não enviada");
        } 
    }

  });


      /*var $formUpload = document.getElementById('uploadImage'),
          $preview = document.getElementById('uploadPreview'),

     

        var xhr = new XMLHttpRequest();

        xhr.open("POST", 'http://mandanode.herokuapp.com/mandanode/product/insert/221' );  

        XHR.addEventListener('load', function(event) {
           alert('Dados Enviados!');
        });
        XHR.addEventListener('error', function(event) {
           alert('erro');
        });

        // header HTTP para dados de formulário POST
        XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        // Finally, send our data.
        XHR.send(formUpload);*/

}
