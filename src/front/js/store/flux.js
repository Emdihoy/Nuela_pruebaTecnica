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
							console.log(data);
			 				setStore({ cuadrante: data })
			 			}
			 )}
		}
	};
};

export default getState;
