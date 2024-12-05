import styled from 'styled-components';
import PropTypes from 'prop-types'; // Asegúrate de importar PropTypes

const Tarjeta = ({ title, dateRange, description, techs, imageSrc, websiteUrl, repoUrl }) => {
  return (
    <Card>
      <CardImage src={imageSrc} alt="Project Thumbnail" />
      <CardContent>
        <Title>{title}</Title>
        <DateRange>{dateRange}</DateRange>
        <Description>
          {description}
        </Description>
        <TechList>
          {techs.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </TechList>
        <Buttons>
          <Button  href={websiteUrl} target="_blank">
            Web
          </Button>
          <Button  href={repoUrl} target="_blank">
            Repositorio
          </Button>
        </Buttons>
      </CardContent>
    </Card>
  );
};

Tarjeta.propTypes = {
  title: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired, // techs es un array de strings
  imageSrc: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

const Card = styled.div`
  width: 320px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease;

  @media (min-width: 460px) and (max-width: 900px) {
    width: 240px;
    height: 400px;
  
  }

  @media (max-width: 460px) {
    width: 180px;
    height: 320px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.4s;
  transform-origin: top;

   &:hover {
    transform: scale(1.1);
    transform-origin: top;
    transition: 0.9s;
  } 

  @media (min-width: 460px) and (max-width: 900px) {
    height: 140px;
  }

  @media (max-width: 460px) {
    height: 100px;
  }
`;

const CardContent = styled.div`
  padding: 16px;

  @media (min-width: 460px) and (max-width: 900px) {
    padding: 12px;
  }

  @media (max-width: 460px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0;

  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 460px) {
    font-size: 0.9rem;
  }
`;

const DateRange = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin: 8px 0;

  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 0.8rem;
    margin: 6px 0;
  }

  @media (max-width: 460px) {
    font-size: 0.7rem;
    margin: 4px 0;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin: 8px 0;
  line-height: 1.4;

  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 0.8rem;
    margin: 6px 0;
  }

  @media (max-width: 460px) {
    font-size: 0.7rem;
    margin: 4px 0;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;

  @media (min-width: 460px) and (max-width: 900px) {
    gap: 6px;
    margin: 12px 0;
  }

  @media (max-width: 460px) {
    gap: 4px;
    margin: 8px 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  
  @media (min-width: 460px) and (max-width: 900px) {
    gap: 8px;
    margin-top: 12px;
  }

  @media (max-width: 460px) {
    gap: 6px;
    margin-top: 8px;
  }
`;

const Button = styled.a`
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: #323232;
  font-size: 1.1rem;
  text-align: center;

  &:hover {   
    background: linear-gradient(180deg, #ff5e5b, #f9918f); 
  }

  @media (min-width: 460px) and (max-width: 900px) {
    font-size: 0.8rem;
    padding: 8px 14px;
  }

  @media (max-width: 460px) {
    font-size: 0.7rem;
    padding: 6px 10px;
  }
`;

export default Tarjeta;
