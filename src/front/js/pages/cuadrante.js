import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/cuadrante.css";


export const Cuadrante = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.obtenerCuadrante();
    }, [store.cuadrante]);

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
                                <button className="btn buttonCuadrante">Editar</button>
                                <button onClick={() => actions.eliminarCuadrante(item.id)} className="btn" style={{ color: "red" }}>Eliminar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};