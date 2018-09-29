var recebeProdutos = function() {

	$.ajax({
		url: '',
		method: 'GET',
		sucess: function(json){
			console.log(data);
			for(var i = 0; i < data.length; i ++){
				var produto = data[i];
				$('#lista-produtos').append(
					''
					);
			}
		}
	});
}



