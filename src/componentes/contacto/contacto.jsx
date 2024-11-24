import styled from "styled-components";
import { TbBrandReactNative } from "react-icons/tb";
import { FaSquareJs } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoIosHeart ,IoIosArrowUp } from "react-icons/io";
import Particles from "../materialUI/particles.tsx";
import { useEffect, useRef } from "react";

// Componente de contacto
const Contacto = () => {
  const FuncionDescargaCV = () => {
    const link = document.createElement("a");
    link.href = "../../assets/cv/CV-Balugano-Juan.pdf";
    link.download = "CV-Balugano-Juan.pdf";
    link.click();
  };

  const divImgRef = useRef(null);

  // Efecto para detectar scroll y aplicar la animación
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (divImgRef.current) {
      observer.observe(divImgRef.current);
    }

    return () => {
      if (divImgRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(divImgRef.current);
      }
    };
  }, []);
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
        <TextoDescarga>Descarga pdf :</TextoDescarga>
        <Boton onClick={FuncionDescargaCV}>CV</Boton>
        <DivTexto>
          creado con:
          <Logos>
            <TbBrandReactNative color="#61dafb" />
            <FaSquareJs color="#eefa05" />
            <IoLogoCss3 color="#4553ac" />
          </Logos>
        </DivTexto>
        <Div3>
          Hecho con <IoIosHeart  style={{ marginTop: '2px' }}/> 
        </Div3>
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
`;

const Boton = styled.a`
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(45deg, #0d0d0d, #333);
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: color 0.4s ease;
  box-shadow: 0 0 20px rgba(0, 115, 177, 0.5), 0 0 40px rgba(0, 115, 177, 0.3);
  
  &:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(0, 115, 177, 0.8), transparent);
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
  color: #00e1ff;
  box-shadow: 0 0 30px rgba(0, 115, 177, 0.8), 0 0 60px rgba(0, 115, 177, 0.6);
}

&:nth-child(2) {
  background-color: #d44638;
}

&:nth-child(2):hover {
  background-color: #ff5733;
}

@media (min-width: 460px) and (max-width: 900px) {
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
  font-size: 1rem;
  color: aliceblue;
`;
const BotonFlotante = styled.a`
  position: absolute;
  right: 50px;
  padding: 0.8rem 1.2rem;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(45deg, #0d0d0d, #333);
  border: 2px solid transparent;
  border-radius: 20px;
  overflow: hidden;
  transition: color 0.4s ease;
  box-shadow: 0 0 20px rgba(0, 115, 177, 0.5), 0 0 40px rgba(0, 115, 177, 0.3);

  &:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(0, 115, 177, 0.8), transparent);
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
  color: #00e1ff;
  box-shadow: 0 0 30px rgba(0, 115, 177, 0.8), 0 0 60px rgba(0, 115, 177, 0.6);
}

@media (min-width: 460px) and (max-width: 900px) {
    font-size: 1rem;
  }

`;
