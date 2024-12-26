import './App.css'
export default function App(props){
  return(
    <>
      <p className='fw-bold'>Hola {props.nombre}, tu edad es {props.edad}.</p>
    </>
  )
}

