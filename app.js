document.getElementById('sumar').addEventListener('click', function sumar_numeros(e) {
	const numero_decimal = .20;
	var uno = document.getElementById('num_uno-suma').value;
	var sumar_los_numeros = parseFloat(uno)*parseFloat(numero_decimal)+parseFloat(uno);

	document.getElementById('resultado-suma').value = sumar_los_numeros;

	e.preventDefault();
});