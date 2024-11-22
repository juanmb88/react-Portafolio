import styled, { keyframes } from 'styled-components';
import WordRotate from "../materialUI/word-rotate";
/* import Atropos from 'atropos/react';
 */import 'atropos/css';

const Inicio = () => {
  return (
    <Container>

        <Text>
            <SpanHola>Hola! 👋 soy </SpanHola>
            <Nombre>Juan Manuel Balugano</Nombre>
            <WordRotates className="text-4xl font-bold text-black dark:text-white"
                        words={["FrontEnd Developer Jr", "Diseño Ux", "Diseño UI", "Web Ecommerce"]}/> 

        </Text>
            <StyledImage
                  src={"/image/sapiens.webp"}
                />  
    </Container>
  );
};

export default Inicio;


// Animaciones

const slideFromTop = keyframes`
  0% {
    opacity: -1;
  }
  100% {
    opacity: 1;
  }
`;
const slideFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

// Estilos
const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:50px;  
  height: 100vh;
  `;

const Text = styled.div`
  font-weight: 500;
  animation: ${slideFromRight} 2s linear infinite;
  animation-iteration-count: 1;
  opacity: ${props => (props.menuOpen ? 0 : 1)};
  transition: opacity 1s ease-in-out;
  flex-direction: row;
  color: #fff;

  @media (min-width: 900px) and (max-width: 1100px) {
    margin:40px;
}
  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 10px;
  }
  @media (max-width: 460px) {
    font-size: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 20px;
    
  }
  `;

const Nombre = styled.p`
  font-size: 50px;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(180deg, #16528e, #cde9f0); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  background-clip: text;
  color: transparent;


  @media (min-width: 460px) and (max-width: 900px) {
  font-size: 24px;
}
  @media (max-width: 460px) {
    font-size: 22px;
    display: flex;
    flex-direction: row;  
  }
  `;

const SpanHola = styled.span`
  font-size: x-large;

  @media (max-width: 460px) {
    font-size : 12px;
  }
  `;

const WordRotates = styled(WordRotate)`
  font-size: 2rem; 
  margin-top: 0px;
  font-weight: bold; 
  color: #16528e; 
  .dark & {
    color: white; 
  }
  @media (min-width: 460px) and (max-width: 900px) {
     font-size: 20px;

 }
 @media (max-width: 460px) {
   font-size: 18px;

 }
`;

const StyledImage = styled.img`
  width: 450px;
  animation: ${slideFromTop} 4s linear;
  @media (min-width: 460px) and (max-width: 900px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 460px) {
    width: 150px;
    height: 150px;

  }
`;
