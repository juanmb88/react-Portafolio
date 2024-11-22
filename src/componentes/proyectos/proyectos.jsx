import styled from "styled-components";
import Particles from "../materialUI/particles.tsx";
import ProductCard from "./proyectosCard.jsx";
import Atropos from "atropos/react";

const Proyectos = () => {

  const proyectosData = [
    {
      title: "Listado de Pacientes",
      dateRange: "Jan 2024 - Feb 2024",
      description: "Uso de los hook UseState para tomar datos ingresados y useEffect para darle funcionalidad de edicion del cliente ya listado Persistencia de datos usa LocalStorage.",
      techs: ["React", "TailwindCSS", "Vite"],
      imageSrc: "/image/citasImagenes.webp",
      websiteUrl: "https://listado-mascotas.netlify.app/",
      repoUrl: "https://github.com/juanmb88/ListadoParaVeterinaria",
    },
    {
      title: "Planificador de Gastos",
      dateRange: "Mar 2023 - May 2023",
      description: "Uso de librerias como : react-swipeable-list: crea listas deslizables que mejoran la experiencia de usuario. Ademas de, react-circular-progressbar : muestra progreso de alguna tarea en forma de barras de progreso circulares.",
      techs: ["React", "Javascripts", "HTML", "CSS"],
      imageSrc: "/image/controlGastos.webp",
      websiteUrl: "https://seguimiento-gastos.netlify.app/",
      repoUrl: "https://github.com/juanmb88/controladorDeGastos-React",
    },
    {
      title: "CriptoCotizador",
      dateRange: "Jun 2022 - Jul 2022",
      description: "Uso y practica con Styled Components biblioteca popular para React que permite escribir estilos CSS directamente en los componentes de JavaScript. ",
      techs: ["React","Javascripts", "CSS", "Vite","Styled Components"],
      imageSrc: "/image/criptoImg.webp",
      websiteUrl: "https://cript0cotizador.netlify.app/",
      repoUrl: "https://github.com/juanmb88/CriptoCotizador",
    },
    {
      title: "Practica Profesionalizante",
      dateRange: "Dic 2021 - Mar 2022",
      description: "Maquetado y diseño elaborado para las prácticas profesionales del Instituto TECLAB. Bajo metodología SCRUM",
      techs: ["HTML", "CSS", "Trello", "Figma"],
      imageSrc: "/image/lumen.webp",
      websiteUrl: "https://www.lumencor.org/",
      repoUrl: "https://github.com/repository",
    },
    {
      title: "Chat Collect",
      dateRange: "Jan 2024 - Feb 2024",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      techs: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI"],
      imageSrc: "/image/portafolio02.webp",
      websiteUrl: "https://portafolio-proto02.netlify.app/",
      repoUrl: "https://github.com/repository",
    },
    {
      title: "Ecommerce con backend",
      dateRange: "Ene 2024 - Ago 2024",
      description: "Sistema de ruteo con controladores, arquitectura en capas,patrones DAO, Repository. Manejo de sesiones y sistema de mailing.",
      techs: [ "Express", "MongoDB", "NodeJS", "CSS3", "Bootstrap", "Javascripts"],
      imageSrc: "/image/pf-backend.webp",
      websiteUrl: "https://pf-baluganojuan-production.up.railway.app/login",
      repoUrl: "https://github.com/juanmb88/PF-BaluganoJuan",
    }
    // Agrega más proyectos según sea necesario
  ];

  return (
    <>
      <Particles quantity={100} ease={100} size={2.9} refresh />
    <Container>

      <H2>Proyectos</H2>
      <ContainerTarjetas>
        {proyectosData.map((proyecto, index) => (
          <AtroposComponent key={index} rotateXMax={20} rotateYMax={20} shadowOffset={0} activeOffset={0} shadowScale={0.5}>
            <ProductCard
              title={proyecto.title}
              dateRange={proyecto.dateRange}
              description={proyecto.description}
              techs={proyecto.techs}
              imageSrc={proyecto.imageSrc}
              websiteUrl={proyecto.websiteUrl}
              repoUrl={proyecto.repoUrl}
            />
          </AtroposComponent>
        ))}
        
      </ContainerTarjetas>
    </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  @media (max-width: 460px) {
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
      background: linear-gradient(180deg, #16528e, #cde9f0); 
      background-clip: text;
      color: transparent;  
      grid-column: 1/4;
      margin-left: 100px;
  
  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 38px;
  }
  @media (max-width: 460px)  {
    font-size: 28px;
  }
  `;


const ContainerTarjetas = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
  gap: 40px;
  align-items: center;
  align-content: center;
  border-radius: 20px;
  @media (min-width: 460px) and (max-width: 900px) {
    display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;

  }
`;

const AtroposComponent = styled(Atropos)`
  width: 320px;
  height: 500px;
  border-radius: 12px;
  box-sizing: border-box;
  display: grid;
  place-items: center;  

  @media (min-width: 460px) and (max-width: 900px) {
    background-color: #4a32d0;
    width: 240px;
    height: 400px;
  }
  @media (max-width: 460px)  {
    background-color: #7463d8;
    width: 180px;
    height: 320px;
  }

`;

export default Proyectos;
