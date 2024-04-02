import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cuadrante.css";


export const Cuadrante = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.obtenerCuadrante();
    }, [store.cuadrante]);

    const [asignatura, setAsignatura] = useState(null);
	const [tipo, setTipo] = useState(null);
	const [curso, setCurso] = useState(null);
	const [grupo, setGrupo] = useState(null);
	const [horas, setHoras] = useState(null);
	const [espacio, setEspacio] = useState(null);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Asignatura</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Grupo</th>
                        <th scope="col">Horas semana</th>
                        <th scope="col">Espacio regular</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {store.cuadrante.map((item, index) =>
                        <tr key={item.id}>
                            <td scope="row">{store.cuadrante?.[index]?.asignatura}</td>
                            <td>{store.cuadrante?.[index]?.tipo}</td>
                            <td>{store.cuadrante?.[index]?.curso}</td>
                            <td>{store.cuadrante?.[index]?.grupo}</td>
                            <td>{store.cuadrante?.[index]?.hora}</td>
                            <td>{store.cuadrante?.[index]?.espacio}</td>
                            <td className="d-flex justify-content-center">
                                <button className="btn buttonCuadrante">Ver</button>
                                <div>
                                    <button type="button" className="btn buttonCuadrante" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Editar fila</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body col">
                                                <div className="dropdown">
                                                    <div className="form-floating">
                                                        <select onChange={(e) => setAsignatura(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                            <option defaultValue>Elegir asignatura</option>
                                                            {store.asignatura.map((item, index) =>
                                                                <option key={index} value={item.id}>{item.nombre}</option>
                                                            )}
                                                        </select>
                                                        <label htmlFor="floatingSelect">Asignatura</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select onChange={(e) => setTipo(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                            <option defaultValue>Elegir tipo de asignatura</option>
                                                            {store.tipo.map((item, index) =>
                                                                <option key={index} value={item.id}>{item.tipo_de_asignatura}</option>
                                                            )}
                                                        </select>
                                                        <label htmlFor="floatingSelect">Tipo de asignatura</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select onChange={(e) => setCurso(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                            <option defaultValue>Elegir curso</option>
                                                            {store.curso.map((item, index) =>
                                                                <option key={index} value={item.id}>{item.curso_escolar}</option>
                                                            )}
                                                        </select>
                                                        <label htmlFor="floatingSelect">Curso</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select onChange={(e) => setGrupo(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                            <option defaultValue>Elegir grupo</option>
                                                            {store.grupo.map((item, index) =>
                                                                <option key={index} value={item.id}>{item.grupo}</option>
                                                            )}
                                                        </select>
                                                        <label htmlFor="floatingSelect">Grupo</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select onChange={(e) => setHoras(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                            <option defaultValue>Cantidad horas</option>
                                                            {store.hora.map((item, index) =>
                                                                <option key={index} value={item.id}>{item.hora}</option>
                                                            )}
                                                        </select>
                                                        <label htmlFor="floatingSelect">Horas</label>
                                                    </div>
                                                    <div className="form-floating">
                                                        <select onChange={(e) => setEspacio(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                            <option defaultValue>Elegir espacio</option>
                                                            {store.espacio.map((item, index) =>
                                                                <option key={index} value={item.id}>{item.espacio}</option>
                                                            )}
                                                        </select>
                                                        <label htmlFor="floatingSelect">Espacio</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button onClick={() => actions.editarCuadrante(item.id, asignatura, tipo, curso, grupo, horas, espacio)} type="button" className="añadirAsignatura btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => actions.eliminarCuadrante(item.id)} className="btn" style={{ color: "red" }}>Eliminar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};