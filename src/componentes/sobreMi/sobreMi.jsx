import styled from 'styled-components';
import { IconCloudDemo } from '../materialUI/skills'; 

const SobreMi = () => {

  return (
    <>
  
    <Container id="sobre-mi">
      <H2 className=''>Sobre mi</H2>
     
        <Box1>
            <Synopsis>
            Tengo experiencia en la creación de sitios  web y aplicaciones web. Siempre buscando mejorar mis habilidades y conocimientos, descubrí mi pasión por la interactividad con el usuario, lo que me inclinó hacia un perfil más Frontend. 
              <SynopsisDos>
            Con especial interés en JavaScript, he realizado capacitaciones donde aprendí desde heurísticas y normas al diseñar para relacionarme con clientes, hasta crear ecommerce con bases de datos y un backend dividido en capas, pruebas de estres con tests funcionales y de integracion.
              </SynopsisDos>
              <SynopsisTres>
              Hoy día, explorando Next.js, Nest.js capacitandome desde un lado Backend, con fin de proporcionar robustez, seguridad y flexibilidad a mis proyectos.
              </SynopsisTres>
            </Synopsis>
        </Box1>
        <Box2>
            <IconCloudDemo/>
        </Box2>
        
    </Container> 
     </>
  );
};

export default SobreMi;

const Container = styled.header`
    margin: 50px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat 200px 1fr;



    
    @media (min-width: 460px) and (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
    
    
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
    
    `;

    const H2 = styled.h2`
      display: flex;
      justify-content: start;
      align-items: center;
      font-size: 50px;
      font-weight:700;
      background-clip: text;
      color: #EB5B00;  
      grid-column: 1/4;
      margin: 40px;
      
      @media (min-width: 460px) and (max-width: 900px) {
      font-size : 38px;
      margin: 10px;
      display: grid;
     }

     @media (max-width: 460px)  {
    font-size: 28px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  
     `;

const Box1 = styled.div`
  grid-column: 1/3;



@media (min-width: 460px) and (max-width: 900px) {

    justify-items: center; 
    text-align: start;
    width: fit-content;
    paddin: 50px;
  }
  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 20px;
    
  }
  @media (min-width: 900px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 20px;
  }
  `;

 const Box2 = styled.div`
  grid-column: 3/5;
  display: flex;
  justify-content: center; 
  align-items: start;

 `
const Synopsis = styled.div`
  font-size: 24px;
  margin: 5px;
  font-weight: 500;
  color: #ffffff;
  a {
    color: #16528e; 
    text-decoration: none;
    font-weight: bold; 
  
  }

  @media (min-width: 460px) and (max-width: 900px) {
  font-weight: 500;
  }

`;
const SynopsisDos = styled.p`

`
const SynopsisTres = styled.p`
margin-bottom: 5px;

`