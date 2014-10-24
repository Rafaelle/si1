$(function (){
	$("#limpar").click( function () {
		$("#tema").val("");		
	});


	$("#adicionar").click( function() {
		var tema = $("#tema").val();

		if(tema!=="") {

  			var novoTema = "<li class='list-group-item'>" + tema;
  			novoTema += "<button id = \"aprendido\">Aprendido</button> <button id = \"remover\"> Remover </button></li>";   			
			$("#lista_aprender").append(novoTema);

		} else {
			alert("Campo vazio");
		}
		
	});






});

