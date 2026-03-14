import styled from 'styled-components';
import { IconCloudDemo } from '../materialUI/skills'; 

const SobreMi = () => {

  return (
    <>
    <Container id="sobre-mi">
      <StyledH2>Sobre mi</StyledH2>
        <Box1>
            <Synopsis>
              Soy Juan Manuel, desarrollador Frontend con experiencia en la creación de sitios y aplicaciones web, y una marcada pasión por la interactividad y la experiencia del usuario. Me estoy formando como Analista Programador en la UAI y trabajo en Telecom Argentina, donde aplico mis conocimientos en AEM (Adobe Experience Manager) como content author, gestionando y publicando contenido en plataformas de gran escala.
              <SynopsisDos>
                Me muevo con comodidad en el ecosistema JavaScript y sigo ampliando mis horizontes de manera particular hacia el mundo Backend, capacitándome en Next.js y Nest.js para construir proyectos más robustos y completos. Siempre en movimiento, siempre aprendiendo.
              </SynopsisDos>
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

const StyledH2 = styled.h2`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 50px;
  font-weight: 700;
  background-clip: text;
  color: #EB5B00;  
  grid-column: 1/4;
  margin: 40px;
  
  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 38px;
    margin: 10px;
    display: grid;
  }

  @media (max-width: 460px) {
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
    padding: 50px;
  }
  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 20px;
  }
  @media (min-width: 900px) {
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
  font-size: 32px;
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
