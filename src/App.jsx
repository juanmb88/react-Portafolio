import styled from 'styled-components';
import NavBar from "./componentes/navBar/Navbar.jsx"
import Inicio from './componentes/inicio/inicio.jsx'; 
import SobreMi from './componentes/sobreMi/sobreMi.jsx';
import Proyectos from "./componentes/proyectos/proyectos.jsx"
import LlamadaAccion from "./componentes/llamadaALaAccion/llamadaAccion.jsx"
import Contacto from './componentes/contacto/contacto.jsx';
 function App() {

  return (
  
     <AppContainer>
           <NavBar/>    
        <Inicio/> 
        <Proyectos/>
        <SobreMi/>
        <LlamadaAccion/>
        <Contacto/>
     </AppContainer> 
  )
}

export default App


const AppContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Nunito Sans", serif;
/*   font-family: "Helvética", sans-serif;
 */  background-color: #640D5F;


`;




