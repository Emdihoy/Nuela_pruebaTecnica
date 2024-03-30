import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";


export const Cuadrante = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        dataTable()
    }, []);

    const dataTable = async () => {
        try {
            actions.obtenerCuadrante()
            setCuadrante(store.cuadrante)
        } catch (error) {
            console.error(error);
        }
    };

    const [cuadrante, setCuadrante] = useState();

    return (
        <>
            <button onClick={() => setCuadrante(store.cuadrante)}></button>
            <button onClick={() => console.log(cuadrante)}></button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Grupo</th>
                        <th scope="col">Horas semana</th>
                        <th scope="col">Espacio regular</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};