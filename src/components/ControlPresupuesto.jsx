import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({
    presupuesto, 
    gastos, 
    setPresupuesto, 
    setGastos,
    setIsValidPresupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado =  gastos.reduce((total, gasto)=> gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado
        
        //calc porcentaje
        const nuevoPorcentaje = ((( presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)

        setGastado(totalGastado)
        setDisponible(totalDisponible)

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 800);

    }, [gastos])    

    

    const formatearCantidad = cantidad => {
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
        })
    }

    const handleResetApp = () => {
        const res = confirm('quieres resetear presupuesto y gastos??')
        if (res){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

            <div>
                <CircularProgressbar
                    value = {porcentaje}
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? 'red' : 'blue',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? 'red' : 'blue'
                    })}
                    text={`${porcentaje}% Gastado`}
                />
            </div>

            <div className='contenido-presupuesto'>
                <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Reset app
                </button>
                <p><span>Presupuesto: </span> {formatearCantidad(presupuesto)} </p>
                <p className={`${disponible < 0 ? 'negativo': ''}`}><span>Disponible: </span> {formatearCantidad(disponible)} </p>
                <p><span>Gastado: </span> {formatearCantidad(gastado)} </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
