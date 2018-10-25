$(document).ready(function () {

	carregaProdutos();


	function carregaProdutos() {
        $.ajax({
            url: 'http://mandanode.herokuapp.com/mandanode/product/list',
            method: 'GET',
            success: function (data) {
                console.log(data);
                produtos = data;
                listarProdutos();
            }
        });
    }

    function listarProdutos() {
        
        $('#lista-produtos').html('');

        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
           
             $('#lista-produtos').append(`
                    <tr role="row" class="odd" >
             		<td class="sorting_1">${produto.name}</td>
		            <td>${produto.idcategory}</td>
		            <td>${produto.description}</td>
		            <td>${produto.quantity}</td>
		            <td>2008/11/28</td>
		            <td>R$ ${produto.cash},00</td>
                    <td> <button class="btn btn-primary btn-xs btn-edit" title="Editar" data-toggle="modal" data-target="#modalAlterar">
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


var alterarProduto = function(ev){

    $('#modalAlterar').modal('toggle');
}

var excluirProduto = function(ev){

    $('#modalExcluir').modal('toggle');
}
