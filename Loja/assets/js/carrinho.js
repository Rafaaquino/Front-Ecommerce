$(document).ready(function () {

	
    var produtos  = JSON.parse(localStorage.getItem('produtosCarrinho')); 

    produtosCarrinho();
	

    function produtosCarrinho() {
        
       const total = produtos.reduce((a,b) => a + b.cash, 0);
       
       $('#produtosCarrinho').html('');
        if (produtos.length === 0) {
          $('#produtosCarrinho').append('<h1 class="sem-items">Nenhum item no seu carrinho</h1>')
        }
       for (var i = 0; i < produtos.length; i++) {

            var produto = produtos[i];
            var imagem = "assets/img/Produtos/camisa.jpg";

            if(produto.images.length > 0){

              imagem = produto.images[0].url;
            } 
          
          $('#produtosCarrinho').append(`

                    <tr>
                      <td >
                        <div class="row">
                          <div class="col-sm-4 hidden-xs"><img src="${imagem}" alt="t-shirt branca" title="t-shirt branca" class="img-fluid"/></div>
                          <div class="col-sm-8">
                            <h4 class="nomargin">${produto.name}</h4>
                            <p><span>${produto.brand}</span></p>
                          </div>
                        </div>
                      </td>
                      <td> R$ <span class="preco">${produto.cash},00</span></td>
                      
                      <td class="acoes" >
                        <button type="button" onclick="(excluirProduto(${produto.id}))" class="btn btn-danger btn-sm">Excluir</button>                
                      </td>
                    </tr>
     	`);
      } 

      document.getElementById('valorSubTotal').innerHTML = total;

      document.getElementById('valorTotal').innerHTML = total;
       // $('#nomeProduto').append(`<h3 id="nomeProduto" class="card-text"><a href="#${produto.id}">${produto.brand}</a> </h3>`);
    
        //$('#preco-produto').append(`<h4 id="preco-produto" class="text-muted">R$ ${produto.cash}</h4>`);

    }


    



    
});


function calcular() {

        var text = document.getElementById("valorSubTotal").innerHTML;
        console.log(text);
        var total = parseInt(text);

        var frete = parseInt("16");
        document.getElementById("resultadoFrete").innerHTML = frete;
        
        var valorTotal =  total + frete;
        document.getElementById("valorTotal").innerHTML = valorTotal;

        localStorage.setItem('valor', JSON.stringify(valorTotal));
}


function excluirProduto(id){

      console.log(id);

      const produtosCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
      const produto = produtosCarrinho.find(a => a.id === id);
      console.log(produto);

      const index = produtosCarrinho.indexOf(produto);
      console.log(index);
      if (index !== -1) {
        produtosCarrinho.splice(index, 1);
      }
      localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho));
      window.location.reload();
}
