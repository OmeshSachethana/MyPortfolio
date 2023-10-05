import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Button } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <div>
      <Link href={'/'}>
        <a style={{
          display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'
        }}>
          <DiCssdeck size={'3rem'} /> <Span >Portfolio</Span>
        </a>
      </Link>
    </div><br/>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      
      

    
    </Div2>
    
   

    
    <Div3>
    
      <SocialIcons href='https://github.com/OmeshSachethana'>
        <AiFillGithub size={'3rem'}/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/omesh-sachethana-464768229'>
        <AiFillLinkedin size={'3rem'}/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com/omesh_ss'>
        <AiFillInstagram size={'3rem'}/>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/OSachethana'>
        <AiFillTwitterCircle size={'3rem'} />
      </SocialIcons>
      <Link href='https://drive.google.com/file/d/1jWavKV7GnENdiHnLdCttT7OVDU0q4z4u/view?usp=sharing'>
    <Button>Download CV</Button>
  </Link> 
    </Div3>
    
  </Container>
);

export default Header;
