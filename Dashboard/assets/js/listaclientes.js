$(document).ready(function () {

    carregaClientes();


    function carregaClientes() {
        $.ajax({
            url: 'http://mandanode.herokuapp.com/mandanode/user/list',
            method: 'GET',
            success: function (data) {
                console.log(data);
                clientes = data;
                listarClientes();
            }
        });
    }

    function listarClientes() {
        
        $('#lista-clientes').html('');

        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i];
           
             $('#lista-clientes').append(`
                    <tr role="row" class="odd">
                    
                          <td>${cliente.id}</td>
                          <td class="sorting_1">${cliente.name}</td>
                          <td>${cliente.email}</td>
                          <td>${cliente.dateBirth}</td>
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


var alterarClientes = function(ev){

    $('#modalAlterar').modal('toggle');
}

var excluirClientes = function(ev){

    $('#modalExcluir').modal('toggle');
}
