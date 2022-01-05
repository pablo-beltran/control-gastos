import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, gastosFiltrados, filtro}) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos': 'No se han asignado gastos'}</h2>
            {
                filtro ? (
                <>
                    <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos'}</h2>
                    {gastosFiltrados.map( gasto => {
                        return(
                            <Gasto
                                key = {gasto.id}
                                gasto = {gasto}
                                setGastoEditar = {setGastoEditar}
                                eliminarGasto = {eliminarGasto}
                            />
                        )
                    })}
                </>
                ):(
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No hay gastos'}</h2>    
                        {gastos.map( gasto => {
                            return(
                                <Gasto
                                    key = {gasto.id}
                                    gasto = {gasto}
                                    setGastoEditar = {setGastoEditar}
                                    eliminarGasto = {eliminarGasto}
                                />
                            )
                        })}
                    </>
                )
            }
            {
                
            }
        </div>
    )
}

export default ListadoGastos
