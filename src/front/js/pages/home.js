import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<button onClick={()=>actions.obtenerAsignatura()}> Obtener Asignatura</button>
			<button onClick={()=>actions.obtenerTipo()}> Obtener tipo</button>
			<button onClick={()=>actions.obtenerCurso()}> Obtener curso</button>
			<button onClick={()=>actions.obtenerGrupo()}> Obtener grupo</button>
			<button onClick={()=>actions.obtenerHoras()}> Obtener horas</button>
			<button onClick={()=>actions.obtenerEspacio()}> Obtener espacio</button>
		</div>
	);
};
