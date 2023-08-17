import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:111-111-1111'>+94 76 000 2554</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:sachethana12@gmail.com'>sachethana12@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Fueling Ideas with Code, Powering Change with Passion</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/OmeshSachethana'>
          <AiFillGithub size={'3rem'}/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/omesh-sachethana-464768229'>
          <AiFillLinkedin size={'3rem'}/>
        </SocialIcons>
        <SocialIcons href='https://instagram.com'>
          <AiFillInstagram size={'3rem'}/>
        </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

