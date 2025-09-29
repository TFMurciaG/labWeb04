
function obtenerActividad(dia) {
	switch (dia) {
		case "Lunes":
			return "Atender un cliente específico";
		case "Martes":
			return "Visitar una agencia fuera de la ciudad";
		case "Miércoles":
			return "Llevar a mi hija al ballet";
		case "Jueves":
			return "Priorizar entregas de desarrollo";
		case "Viernes":
			return "Atender problemas de manera remota";
		case "Sábado":
			return "Hacer lo que mi esposa quiera";
		default:
			return null;
	}
}

function mostrarRecordatorio() {
	const dia = document.getElementById('dia').value;
	const mensaje = document.getElementById('mensaje').value;
	const actividad = obtenerActividad(dia);
	const resultado = document.getElementById('resultado');
	if (actividad) {
		resultado.innerHTML = `<strong>Hoy es ${dia}.</strong><br>Actividad: ${actividad}<br>Mensaje: ${mensaje}`;
	} else {
		resultado.innerHTML = `<strong>Hoy es ${dia}.</strong><br>No tienes actividades programadas.<br>Mensaje: ${mensaje}`;
	}
}
