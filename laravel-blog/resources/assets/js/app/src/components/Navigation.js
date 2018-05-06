import React from 'react';
import styled from 'styled-components';
import {Link, Page} from "./styledCopy";
import {BREAKPOINTS} from "../constants";

const List = styled.ul`
  display:flex;
  flex-direction: row;
  list-style: none;
  padding: .5rem 0;
  position: sticky;
  
  @media screen and (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  ${({noPadding}) => {
      if(noPadding) {
          return `
            padding: .5rem;
            margin: .5rem;
          `;
      }
      return `
            padding: .5rem .5rem .5rem 0rem;
            margin: .5rem .5rem .5rem 0rem; 
        `;
}}
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  left:0;
`;

const NavItem = ({noPadding, href, title, children}) => (
    <Item noPadding={!noPadding}>
        {(title && href) && <Link href={href} noEffectResponsive>{title}</Link>}
        {children && children}
    </Item>
);

const Logo = styled.span`
   font-size: 28px;
   font-weight: 600;
   
   @media screen and (max-width: ${BREAKPOINTS.sm}) {
      padding: 1rem;      
   }
`;

const Navigation = (props) => (
    <Background>
        <Page>
            <List>
                <NavItem noPadding>
                    <Logo>thomas</Logo>
                </NavItem>
                <NavItem title='work' href='#'/>
                <NavItem title='about me' href='#'/>
                <NavItem title='blog' href='#'/>
                <NavItem title='contact' href='#'/>
            </List>
        </Page>
    </Background>
);

export default Navigation;