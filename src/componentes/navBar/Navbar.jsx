import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

const Navbar = () => {
  return (

    <NavContainer>
          <NavLogo>
                  <ScrollLink to="inicio" smooth={true} duration={500}>
                    <NavLogoLink>JB</NavLogoLink>
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

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  top: 0;
  padding: 1rem 2rem;

  @media (min-width: 460px) and (max-width: 900px) {
    flex-direction: row;
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
`; 

const NavLogoLink = styled.span`
  cursor: pointer;
  color: white;
  text-decoration: none;

 
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
      color: #27498e; /* Cambia el color al pasar el cursor */
    }
  }
  @media (max-width: 460px) {
   a{
    font-size: .9rem;
    margin: 5px;
    padding: 1px;
   }

 }

`;
