$(function (){
	$("#limpar").click( function () {
		$("#tema").val("");		
	});

	$("#adicionar").click( function(){
		var tema = $("#tema").val();
		if(tema!=="" ) {
			//$("#lista_aprender").append(tema);
			//$("li").addClass("list-group-item");
		} else {
			alert("Campo vazio");
		}

	});
});

