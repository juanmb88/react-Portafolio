import {FaInstagram, FaGithub, FaBehance} from 'react-icons/fa';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const IconoRedes = () => {
  return (
    <>
    <Ul>
       <Li>
            <Link to="https://www.behance.net/juanbalugano" target="_blank">
               <Span><FaBehance/></Span> 
            </Link>
        </Li>

        <Li>
            <Link to="https://www.instagram.com/jbalugano/" target="_blank">
                <Span><FaInstagram/></Span>  
            </Link>
        </Li>

        <Li>
            <Link to="https://github.com/juanmb88/" target='_blank'>
                <Span><FaGithub/></Span>
            </Link>
        </Li>
    </Ul>
    </>
  )
}

export default IconoRedes

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    position: relative;

    `;

const Li = styled.li`
    padding: 6px;
    position: relative;
    height: 35px;
    width: 35px;
    margin: 10px 20px;
    border-radius: 10px;
    list-style-type: none;
    box-shadow: 10px 10px 10px #4372bd;; 
    `;

const Span =styled.span`
     position: absolute;
     width: 90%;
     height: 90%;
     display: flex;
     transition: .9s;
     font-size: 1.0em;
     background-color: #333333;
     color: rgba(250, 246, 246, 0.2);
     border-radius: 5px;
     &:hover{
     font-size: 30px;
     background-color: rgba(20, 60, 161, 0.8);
     color: rgba(250, 246, 246, 1);
     box-shadow: 10px 20px 5px #16191e; 
     }
     
 `;