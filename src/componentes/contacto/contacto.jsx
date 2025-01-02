import styled from "styled-components";
import { TbBrandReactNative } from "react-icons/tb";
import { FaSquareJs } from "react-icons/fa6";
import { IoLogoCss3, IoIosHeart, IoIosArrowUp } from "react-icons/io";
import Particles from "../materialUI/particles.tsx";

const Contacto = () => {


  const FuncionDescargaCV = () => {
    const link = document.createElement("a");
    link.href = "../assets/cv/CV-Balugano-Juan.pdf";
    link.download = "CV-Balugano-Juan.pdf";
    link.click();
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Particles quantity={100} ease={100} size={3.0} refresh />
      <ContenedorContacto id="contacto">
        <TextoDescarga>Descarga PDF</TextoDescarga>
        <Boton onClick={FuncionDescargaCV} aria-label="Descargar CV">
          CV
        </Boton>
        <DivTexto>
          Creado con:
          <Logos>
            <TbBrandReactNative color="#61dafb" />
            <FaSquareJs color="#eefa05" />
            <IoLogoCss3 color="#4553ac" />
          </Logos>
        </DivTexto>
        <Div3>
          Hecho con <IoIosHeart style={{ marginTop: "20px" }} /> 
{/*           <p>Visitas al sitio: {visitCount}</p>
 */}        </Div3>
        <BotonFlotante onClick={handleScrollToTop}>
          <IoIosArrowUp size={24} />
        </BotonFlotante>
      </ContenedorContacto>
    </>
  );
};
export default Contacto;
const ContenedorContacto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  padding: 20px;
`;
const TextoDescarga = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 20px;
  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 460px) {
    font-size: 1rem;
  }
`;
const Boton = styled.a`
  padding: 1rem 1rem;
  color: #fff;
  background: linear-gradient(45deg, #0d0d0d, #333);
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  position: relative;
  transition: color 0.4s ease;
  box-shadow: 0 0 2px #EB5B00, 0 0 4px #EB5B00;
  
  &:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, #eb5a0086, transparent); 
  z-index: 1;
  transition: transform 0.5s ease;
  transform: scaleX(0);
  transform-origin: right;
}
&:hover:before {
  transform: scaleX(1);
  transform-origin: left;
}

&:hover {
  color: white;
  box-shadow: 0 0 3px #ff5733, 0 0 6px #ff5733;
}



@media (min-width: 580px) and (max-width: 900px) {
  padding: 1.0rem 1.5rem;
  
  }

  @media (max-width: 481px) {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }
`;
const DivTexto = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #f0f8ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Div3 = styled.div`
  color: aliceblue;
`;
const BotonFlotante = styled.a`
  position: fixed;
  will-change: transform;
  right: 50px; 
  bottom: 50px; 
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(45deg, #0d0d0d, #333);
  border: 2px solid transparent;
  border-radius: 10px;
  overflow: hidden;
  transition: color 0.4s ease;
  box-shadow: 0 0 2px #EB5B00, 0 0 4px #EB5B00;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, #eb5a0073, transparent);
    z-index: 1;
    transition: transform 0.5s ease;
    transform: scaleX(0);
    transform-origin: right;
  }
  
  &:hover:before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover {
    color: white;
    box-shadow: 0 0 2px #EB5B00, 0 0 4px #EB5B00;
  }

  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 460px) {
    padding: 0.4rem 0.8rem;
    right: 30px; 
    bottom: 30px; 
    border-radius: 10px;
  }
`;

