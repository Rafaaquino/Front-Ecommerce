$(document).ready(function () {

  carregaProdutos();


  function carregaProdutos() {
        $.ajax({
            url: 'http://mandanode.herokuapp.com/mandanode/sale/list',
            method: 'GET',
            success: function (data) {
                console.log(data);
                sale = data;
                

                window.localStorage.setItem('relatorio', JSON.stringify(sale));
                  
                listarProdutos();
               
            }
        });
    }

    function listarProdutos() {
        
        

        $('#relatorioJson').html('');

       const  relatorio = JSON.parse(localStorage.getItem("relatorio"));
       
          var preco = 0;
          var pedidos =0;
          const venda = relatorio.length;


          for (var i = 0; i < relatorio.length; i++) {

          preco += relatorio[i].price;
          pedidos += relatorio[i].products.length;      

        }


        console.log(pedidos)



             $('#relatorioJson').append(`
                

                <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
                    <div class="panel panel-teal panel-widget border-right">
                      <div class="row no-padding"><em class="fa  fa-shopping-cart color-blue"></em>
                        <div class="large">${venda}</div>
                        <div class="text-muted">Vendas</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
                    <div class="panel panel-blue panel-widget border-right">
                      <div class="row no-padding"><em class="fa fa-xl fa-users color-orange"></em>
                        <div class="large">52</div>
                        <div class="text-muted">Usuários</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
                    <div class="panel panel-orange panel-widget border-right">
                      <div class="row no-padding"><em class="fa fa-xl fa-box color-red"></em>
                        <div class="large">${pedidos}</div>
                        <div class="text-muted">Pedidos</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
                    <div class="panel panel-red panel-widget ">
                      <div class="row no-padding"><i class="fas  fa-xl fa-dollar-sign color-teal"></i>
                        <div class="large">${preco},00</div>
                        <div class="text-muted">Receita</div>
                      </div>
                    </div>
                  </div>
                
              `); 

      }
          
});