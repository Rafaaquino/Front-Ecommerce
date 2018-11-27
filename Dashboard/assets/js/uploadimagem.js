

function PreviewImage() { 
        var oFReader = new FileReader(); 
        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

        oFReader.onload = function (oFREvent) { 
            document.getElementById("uploadPreview").src = oFREvent.target.result;
            uploadImage(); 
        }; 
        
}

function uploadImage(){
      var $formUpload = document.getElementById('uploadImage'),
          $preview = document.getElementById('uploadPreview'),
          i = 0;

     

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
        XHR.send(formUpload);

}
