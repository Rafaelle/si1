$(function (){
	
	$("#adicionar").click( function() {
		var tema = $("#tema").val();

		if(tema!=="") {
			var novoTema = "<li id='tema'>" + tema;
  			novoTema += "<button id = \"aprendido\">Aprendido</button> <button id = \"remover\"> Remover </button></li>";		
			$("#lista_aprender").append(novoTema);
			$("li").addClass("list-group-item");
		} else {
			alert("Campos invalidos");
		}	
	});
		
	$("#limpar").click( function () {
		$("#tema").val("");		
	});

		
	$("#lista_aprender").on("click", "#aprendido", function () {
		var li = $(this).parent();
		li.remove();
		$("#lista_aprendido").append(li);		
		});
		

	$("#lista_aprender").on("click", "#remover", function () {
		$(this).parent().remove();		
	});

});

