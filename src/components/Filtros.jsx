import React from 'react'

const Filtros = ({filtro, setFiltro}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form >
                <div className='campo'>
                    <label>Filtrar gastos</label>
                    <select value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                    >
                        <option value="">--Seleccione</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="salud">Salud</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros

