import styled from 'styled-components';

const LlamadaAccion = () => {
  return (
    <ContenedorLlamadaAccion>
      <ColumnaIzquierda>
        <TituloGrande>¿Trabajamos juntos?</TituloGrande>
        <Subtitulo>¡Trabajemos juntos!</Subtitulo>
      </ColumnaIzquierda>

      <ColumnaDerecha>
        <ContenedorBotones>
          <Boton href="https://www.linkedin.com/in/juanm-balugano/" target="_blank" rel="noopener noreferrer" aria-label="Ir a mi LinkedIn">
            LinkedIn
          </Boton>

          <Boton href="mailto:juanbalugano@gmail.com" aria-label="Enviar un correo a Juan Manuel Balugano">
            Gmail
          </Boton>
        </ContenedorBotones>
      </ColumnaDerecha>
    </ContenedorLlamadaAccion>
  );
};



const ContenedorLlamadaAccion = styled.div`
border-radius: 30px;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin: 50px;
  @media (min-width: 460px) and (max-width: 900px) {
    flex-direction: column;
    padding: 15px;
  }

  @media (max-width: 460px) {
    flex-direction: column;
    padding: 10px;
    margin: 20px;
  }
  `;

// Columna izquierda
const ColumnaIzquierda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (max-width: 460px) {
    flex: none;
    margin-bottom: 20px;
  }
  `;

const ColumnaDerecha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (max-width: 460px) {
    flex: none;
  }
  `;

const TituloGrande = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: #fff;
  margin: 0;
  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 3rem;
  }

  @media (max-width: 460px) {
    font-size: 2rem;
  }
`;

const Subtitulo = styled.h2`
  font-size: 2rem;
  text-align: center;
  background-clip: text;
  color: #EB5B00;
  margin-top: 1rem;
  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media (max-width: 460px) {
    font-size: 1.2rem;
  }
  `;

const ContenedorBotones = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 460px) {
    flex-direction: column;
    gap: 0.5rem;
  }
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
  box-shadow: 0 0 2px #EB5B00, 0 0 4px #EB5B00;
  
  &:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, #eb5a0049, transparent);
  z-index: 1;
  transition: transform 0.6s ease;
  transform: scaleX(0);
  transform-origin: right;
}
&:hover:before {
  transform: scaleX(1);
  transform-origin: left;
}

&:hover {
  color: white;
  box-shadow: 0 0 3px #EB5B00, 0 0 6px #EB5B00;
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

  @media (max-width: 460px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
    `;


export default LlamadaAccion;
