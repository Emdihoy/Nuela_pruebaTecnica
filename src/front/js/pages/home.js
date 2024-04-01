import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Cuadrante } from "../pages/cuadrante";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerAsignatura();
		actions.obtenerTipo();
		actions.obtenerCurso();
		actions.obtenerGrupo();
		actions.obtenerHora();
		actions.obtenerEspacio();
	}, []);

	const [asignaturas, setAsignaturas] = useState(null);
	const [tipo, setTipo] = useState(null);
	const [curso, setCurso] = useState(null);
	const [grupo, setGrupo] = useState(null);
	const [horas, setHoras] = useState(null);
	const [espacio, setEspacio] = useState(null);

	return (
		<>
			<div className="main row">
				<div className="sidePanel col-3" >
					<div>
						<h5>Tajamar</h5>
					</div>
					<ul className="listItem">
						<li>
							<button className="sidePanelButton"></button>
						</li>
						<li>
							<button className="sidePanelButton">Inicio</button>
						</li>
						<li>
							<button className="sidePanelButton">Horarios</button>
						</li>
						<li>
							<button className="sidePanelButton">Profesores</button>
						</li>
						<li>
							<button className="sidePanelButton">Familias</button>
						</li>
						<li>
							<button className="sidePanelButton">Espacios</button>
						</li>
						<li>
							<button className="sidePanelButton">Asignaturas</button>
						</li>
						<li>
							<button className="sidePanelButton">Notificaciones</button>
						</li>
						<li>
							<button className="sidePanelButton">Settings</button>
						</li>
					</ul>
				</div>
				<div className="bodyPanel text-center col-9">
					<div className="title d-flex align-items-start flex-column">
						<h2>Profesores</h2>
						<p>Crea y gestiona profesores</p>
					</div>

					<div className="devider my-4"></div>

					<div className="row">
						<div className="col-1">Imagen</div>
						<div className="col-5 d-flex align-items-start flex-column">
							<h2>Marta Martinez</h2>
							<p>profesora123@colegio.com</p>
							<p>+34 666 555 444</p>
						</div>
					</div>

					<div className="devider my-4"></div>

					<div className="buttonContainer col-12 border border-primary">
						<div className="buttonContainer">
							<button className="btn btn-light">Semanal</button>
							<button className="btn btn-light">Anual</button>
						</div>
					</div>
					<div className="statsContainer col-12">
						<div className="stats">
							<p>Horas totales</p>
							<h1>18 horas</h1>
						</div>
						<div className="stats">
							<p>Horas lectivas</p>
							<h1>18 horas</h1>

						</div>
						<div className="stats">
							<p>Horas complementarias</p>
							<h1>0 horas</h1>
						</div>
					</div>

					<div className="devider my-4"></div>

					<div className="horasTipoContainer">
						<div className="horasTipoButton">
							<button className="btn btn-light">Horas lectivas</button>
							<button className="btn btn-light">Horas complementarias</button>
						</div>
					</div>
					<div className="d-flex flex-row-reverse col-12">
						<button type="button" className="añadirAsignatura btn" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Añadir Asignatura</button>
					</div>
					<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="exampleModalLabel">Añadir asignatura</h1>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body col">
									<div className="dropdown">
										<div className="form-floating">
											<select onChange={(e) => setAsignaturas(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
												<option defaultValue>Elegir asignatura</option>
												{store.asignatura.map((item, index) =>
													<option type="text" key={index}>{item.nombre}</option>
												)}
											</select>
											<label htmlFor="floatingSelect">Asignatura</label>
										</div>
										<div className="form-floating">
											<select onChange={(e) => setTipo(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
												<option defaultValue>Elegir tipo de asignatura</option>
												{store.tipo.map((item, index) =>
													<option key={index}>{item.tipo_de_asignatura}</option>
												)}
											</select>
											<label htmlFor="floatingSelect">Tipo de asignatura</label>
										</div>
										<div className="form-floating">
											<select onChange={(e) => setCurso(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
												<option defaultValue>Elegir Curso</option>
												{store.curso.map((item, index) =>
													<option key={index}>{item.curso_escolar}</option>
												)}
											</select>
											<label htmlFor="floatingSelect">Curso</label>
										</div>
										<div className="form-floating">
											<select onChange={(e) => setGrupo(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
												<option defaultValue>Elegir Grupo</option>
												{store.grupo.map((item, index) =>
													<option key={index}>{item.grupo}</option>
												)}
											</select>
											<label htmlFor="floatingSelect">Grupo</label>
										</div>
										<div className="form-floating">
											<select onChange={(e) => setHoras(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
												<option defaultValue>Cantidad horas</option>
												{store.hora.map((item, index) =>
													<option key={index}>{item.hora}</option>
												)}
											</select>
											<label htmlFor="floatingSelect">Horas</label>
										</div>
										<div className="form-floating">
											<select onChange={(e) => setEspacio(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
												<option defaultValue>Elegir espacio</option>
												{store.espacio.map((item, index) =>
													<option key={index}>{item.espacio}</option>
												)}
											</select>
											<label htmlFor="floatingSelect">Espacio</label>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="añadirAsignatura btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Añadir Asignatura</button>
								</div>
							</div>
						</div>
					</div>

					<div>
						<Cuadrante />
					</div>


					<div className="d-flex">
						{/* <button onClick={() => actions.obtenerAsignatura()}> Obtener Asignatura</button>
						<button onClick={() => actions.obtenerTipo()}> Obtener tipo</button>
						<button onClick={() => actions.obtenerCurso()}> Obtener curso</button>
						<button onClick={() => actions.obtenerGrupo()}> Obtener grupo</button>
						<button onClick={() => actions.obtenerHora()}> Obtener horas</button>
						<button onClick={() => actions.obtenerEspacio()}> Obtener espacio</button>
						<button onClick={() => actions.obtenerCuadrante()}> Obtener cuadrante</button> */}
						<button onClick={() => console.log(asignaturas)}> prueba asignaturas</button>
						<button onClick={() => console.log(tipo)}> prueba tipo</button>
						<button onClick={() => console.log(curso)}> prueba curso</button>
						<button onClick={() => console.log(grupo)}> prueba grupo</button>
						<button onClick={() => console.log(horas)}> prueba horas</button>
						<button onClick={() => console.log(espacio)}> prueba espacio</button>
					</div>
				</div>
			</div>
		</>
	);
};
