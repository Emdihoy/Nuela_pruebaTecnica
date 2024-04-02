const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			asignatura:[],
			tipo:[],
			curso:[],
			grupo:[],
			hora:[],
			espacio:[],
			cuadrante:[],
		},
		actions: {
			obtenerAsignatura: () => {
				const requestOptions = {
					method: 'GET',
					headers: {"content-type": "application/json"},						
				};					
				fetch(process.env.BACKEND_URL + "api/asignatura", requestOptions)
				.then(response => response.json())
				.then(data => 
						{
							console.log(data);
							setStore({ asignatura: data })
						}
			)},
			obtenerTipo: () => {
				const requestOptions = {
					method: 'GET',
					headers: {"content-type": "application/json"},						
				};					
				fetch(process.env.BACKEND_URL + "api/tipo", requestOptions)
				.then(response => response.json())
				.then(data => 
						{
							console.log(data);
							setStore({ tipo: data })
						}
			)},
			obtenerCurso: () => {
				const requestOptions = {
					method: 'GET',
					headers: {"content-type": "application/json"},						
				};					
				fetch(process.env.BACKEND_URL + "api/curso", requestOptions)
				.then(response => response.json())
				.then(data => 
						{
							console.log(data);
							setStore({ curso: data })
						}
			)},
			obtenerGrupo: () => {
				const requestOptions = {
					method: 'GET',
					headers: {"content-type": "application/json"},						
				};					
				fetch(process.env.BACKEND_URL + "api/grupo", requestOptions)
				.then(response => response.json())
				.then(data => 
						{
							console.log(data);
							setStore({ grupo: data })
						}
			)},
			obtenerHora: () => {
				const requestOptions = {
					method: 'GET',
					headers: {"content-type": "application/json"},						
				};					
				fetch(process.env.BACKEND_URL + "api/hora", requestOptions)
				.then(response => response.json())
				.then(data => 
						{
							console.log(data);
							setStore({ hora: data })
						}
			)},
			obtenerEspacio: () => {
				const requestOptions = {
					method: 'GET',
					headers: {"content-type": "application/json"},						
				};					
				fetch(process.env.BACKEND_URL + "api/espacio", requestOptions)
				.then(response => response.json())
				.then(data => 
						{
							console.log(data);
							setStore({ espacio: data })
						}
			)},
			 obtenerCuadrante:() => {
			 	const requestOptions = {
			 		method: 'GET',
			 		headers: {"content-type": "application/json"},						
			 	};					
			 	fetch(process.env.BACKEND_URL + "api/cuadrante", requestOptions)
			 	.then(response => response.json())
			 	.then(data => 
			 			{
							// console.log(data);
			 				setStore({ cuadrante: data })
			 			}
			 )}, 
			 agregarCuadrante: async (asignaturaId, tipoId, cursoId, grupoId, horasId, espacioId) => {
				console.log("Datos a enviar:", { "asignaturaId": asignaturaId, "tipoId": tipoId, "cursoId": cursoId, "grupoId": grupoId, "horasId": horasId, "espacioId": espacioId});
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/cuadrante", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ 
							"asignaturaId": asignaturaId, 
							"tipoId": tipoId, 
							"cursoId": cursoId, 
							"grupoId": grupoId, 
							"horaId": horasId, 
							"espacioId": espacioId
						}),
					});			
					if (response.ok) {
					} else {
						console.error("Error al añadir fila a cuadrante:", response.status, response.statusText);
						// Obtén y muestra el mensaje de error del servidor si está disponible
						const errorResponse = await response.json().catch(() => null);
						const errorMessage = errorResponse ? errorResponse.error : "Unknown error";
						alert(`Error al añadir fila a cuadrante: ${errorMessage}. Intentalo nuevamente.`);
					}
				} catch (error) {
					console.error("Error al añadir fila a cuadrante:", error);
					alert("Error al añadir fila a cuadrante. Intentalo nuevamente.");
				}
			},
		}
	};
};

export default getState;
