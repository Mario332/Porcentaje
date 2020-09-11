document.getElementById('resta').addEventListener('click', function sumar_numeros(e) {
	const numero_decimal = .15;
	var uno = document.getElementById('num_uno-resta').value;
	var sumar_los_numeros = parseFloat(uno)*parseFloat(numero_decimal)-parseFloat(uno);

	document.getElementById('resultado-resta').value = sumar_los_numeros;

	e.preventDefault();
});