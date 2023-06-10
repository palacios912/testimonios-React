import './App.css';
import Testimonio from './componentes/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que algunas personas opinan sobre React y Node js</h1>
        <Testimonio
          nombre='Juliana Suarez'
          pais='Argentina'
          imagen='retrato1'
          cargo='Programador frontend'
          empresa='Mercado.org'
          testimonio='Es <b>rápido, asincrónico</b>, proporciona un único, generalizado lenguaje de programación y tipo de dato!' />
        <Testimonio
          nombre='Julian Suarez'
          pais='Uruguay'
          imagen='retrato2'
          cargo='Programador frontend'
          empresa='Mercado.org'
          testimonio='me facilita poder escribir codigo en react, lo encuentro comodo! espero poder continuar programando en este lenguaje tan potente'/>
      </div>
    </div>
  );
}

export default App;
