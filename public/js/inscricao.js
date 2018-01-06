$.ajax({
	method: 'POST',
	url: 'http://avanade.gama.academy/api/process_applications',
	dataType: 'json',
	headers: { EMAIL: 'felipebelinassi@yahoo.com' }, // coloque seu email que usou para se inscrever aqui!
	contentType: 'application/json',
	data: JSON.stringify({ process_application: { name: $('#name').val(), email: $('#email').val() } }),
	success: function(json) { 
		alert("SUCESSO!");
	},
	error: function(jqXHR, textStatus, errorThrown) {
		// Não esquece de tratar os erros
	}
});