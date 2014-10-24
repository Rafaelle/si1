$(function (){
	$("#limpar").click( function () {
		$("#tema").val("");		
	});


	$("#adicionar").click( function() {
		var tema = $("#tema").val();

		if(tema!=="") {
			var novoTema = tema;
  			novoTema += "<button id = \"editar\">Editar</button> <button id = \"remover\"> Remover </button>";

  			//var novoTema = "<div>" + tema;
  			//novoTema += "</nome></h3></div><div class=\"panel-body\">";
      		//novoTema += "button id = \"editar\">Editar</button> <button id = \"remover\"> Remover </button>";
   			//amigo += "</div></div>"; 
   			
			$("#lista_aprender").append(novoTema);
			$("li").addClass("list-group-item");
			$("#editar")
		} else {
			alert("Campo vazio");
		}
		
	});






});

