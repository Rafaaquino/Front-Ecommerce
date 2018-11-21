$(document).ready(function () {

	carregaUsuarios();


	function carregaUsuarios() {
        $.ajax({
            url: 'http://mandanode.herokuapp.com/mandanode/user/list',
            method: 'GET',
            success: function (data) {
                console.log(data);
                usuarios = data;
                listarUsuarios();
            }
        });
    }

    function listarUsuarios() {
        
        $('#lista-usuarios').html('');

        for (var i = 0; i < usuarios.length; i++) {
            var usuario = usuarios[i];
           
             $('#lista-usuarios').append(`
                    <tr role="row" class="odd">
                    
                          <td>${usuario.id}</td>
                          <td class="sorting_1">${usuario.name}</td>
                          <td>${usuario.email}</td>
                          <td>${usuario.dateBirth}</td>
                          <td>
                              <button class="btn btn-primary btn-xs btn-edit" title="Editar" data-toggle="modal" data-target="#modalAlterar">
                                <i class="fas fa-pencil-alt"></i>
                             </button> 
                             <button class="btn btn-danger btn-xs btn-edit"  data-toggle="modal" data-target="#modalExcluir" title="Excluir">
                                <i class="far fa-trash-alt"></i>
                             </button>
                         </td>
                    </tr>
                    
             	`); 


               // $('#nomeProduto').append(`<h3 id="nomeProduto" class="card-text"><a href="#${produto.id}">${produto.brand}</a> </h3>`);
            
              
        }
      
    }

   
});


var alterarUsuario = function(ev){

    $('#modalAlterar').modal('toggle');
}

var excluirUsuario = function(ev){

    $('#modalExcluir').modal('toggle');
}
