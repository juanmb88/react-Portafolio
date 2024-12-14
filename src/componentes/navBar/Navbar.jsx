import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import keyframes from 'styled-components';
const Navbar = () => {
  return (

    <NavContainer>
          <NavLogo>
                  <ScrollLink to="inicio" smooth={true} duration={500}>
                    <StyledImage src="/image/LOGO.png" alt={"imgLogo"}></StyledImage>
                  </ScrollLink>
          </NavLogo>
          <NavLinks>
                  <NavLink>
                        <ScrollLink to="proyectos" smooth={true} duration={500}>
                          Proyectos
                        </ScrollLink>
                  </NavLink>
                  <NavLink>
                        <ScrollLink to="sobre-mi" smooth={true} duration={500}>
                          Sobre mí
                        </ScrollLink>
                  </NavLink>
                  <NavLink>
                        <ScrollLink to="contacto" smooth={true} duration={500}>
                          Contacto
                        </ScrollLink>
                  </NavLink>
          </NavLinks>
    </NavContainer>
    
  );
};

export default Navbar;
const slideFromTop = keyframes`
  0% {
    opacity: -1;
  }`
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  top: 0;
  padding: 1rem 2rem;

  @media (min-width: 460px) and (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
 
`;

const NavLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  
  
  @media (max-width: 460px) {
    display: none;  
 }

 @media (min-width: 460px) and (max-width: 900px) {
  display: none;
  }
`; 

const StyledImage = styled.img`
  width: 75px;
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

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 460px) {
   display: flex;
   flex-direction: row;

 }
  
`;

const NavLink = styled.li`

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 10px;
    cursor: pointer;

    &:hover {
      color: #EB5B00;
    }
  }
  @media (max-width: 460px) {
   a{
    font-size: .9rem;
    margin: 10px;
    padding: 1px;
   }

 }

`;
