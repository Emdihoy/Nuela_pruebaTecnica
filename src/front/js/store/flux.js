const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			asignaturas:[],
			tipo:[],
			curso:[],
			grupo:[],
			horas:[],
			espacio:[],
			cuadrante:[],
		},
		actions: {
			obtenerAsignatura: () => {
				const requestOptions = {
					method: 'GET',
					headers: {"content-type": "application/json"},						
				};					
				fetch(process.env.BACKEND_URL + "api/asignaturas", requestOptions)
				.then(response => response.json())
				.then(data => 
						{
							console.log(data);
							setStore({ asignaturas: data })
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
			obtenerHoras: () => {
				const requestOptions = {
					method: 'GET',
					headers: {"content-type": "application/json"},						
				};					
				fetch(process.env.BACKEND_URL + "api/horas", requestOptions)
				.then(response => response.json())
				.then(data => 
						{
							console.log(data);
							setStore({ horas: data })
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
			 				setStore({ cuadrante: data })
			 			}
			 )},
		}
	};
};

export default getState;
