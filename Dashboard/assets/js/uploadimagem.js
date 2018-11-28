

function PreviewImage() { 
        var oFReader = new FileReader(); 
        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

        oFReader.onload = function (oFREvent) { 
            document.getElementById("uploadPreview").src = oFREvent.target.result;
            
        };
        
        uploadImage(); 
}

function uploadImage(){
      

    // Evento Submit do formulário
  $('#formProduto').submit(function() {
 
    // Captura os dados do formulário
    var uploadImage = document.getElementById('uploadImage');
 
    // Instância o FormData passando como parâmetro o formulário
    var formData = new FormData(uploadImage);
 
    // Envia O FormData através da requisição AJAX
    $.ajax({
       
       type: "POST",
       enctype: 'multipart/form-data',
       url: "http://mandanode.herokuapp.com/mandanode/product/insert/221",
       data: formData,
       dataType: 'json',
       processData: false,  
       contentType: false,
       success: function(retorno){
          if (retorno.status == '1'){
            alert("img enviada");
          }else{
            alert("erro não enviada");
          }
          
         }
    });
 
    return false;
  
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
