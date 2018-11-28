$(document).ready(function () {

	
    var produtos  = JSON.parse(localStorage.getItem('produtosCarrinho')); 

    produtosCarrinho();
	

    function produtosCarrinho() {
        
       
       
       $('#produtosCarrinho').html('');
        
       for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i]; 
            
          $('#produtosCarrinho').append(`

                    <tr>
                      <td >
                        <div class="row">
                          <div class="col-sm-4 hidden-xs"><img src="assets/img/produtos/camisa.jpg" alt="t-shirt branca" title="t-shirt branca" class="img-fluid"/></div>
                          <div class="col-sm-8">
                            <h4 class="nomargin">${produto.name}</h4>
                            <p><span>${produto.description}</span></p>
                          </div>
                        </div>
                      </td>
                      <td> R$ <span id="precoproduto1">${produto.cash},00</span></td>
                      <td>
                        <input id="qntProduto1" type="number" class="form-control text-center" value="1" min="1" max="10">
                      </td>
                      <td class="text-center">R$ <span id="subtotal1"> 10,00</span></td>
                      <td class="acoes" >
                        <button type="button" onclick="(excluirProduto(${produto.id}))" class="btn btn-danger btn-sm">Excluir</button>                
                      </td>
                    </tr>
     	`);
      } 


       // $('#nomeProduto').append(`<h3 id="nomeProduto" class="card-text"><a href="#${produto.id}">${produto.brand}</a> </h3>`);
    
        //$('#preco-produto').append(`<h4 id="preco-produto" class="text-muted">R$ ${produto.cash}</h4>`);

    }


    



    
});




function excluirProduto(id){

      console.log(id);

      const produto = produtos.find(a => a.id === id);
      console.log(produto);

      localStorage.removeItem('produtoSelecionado', JSON.stringify(produto));
}
