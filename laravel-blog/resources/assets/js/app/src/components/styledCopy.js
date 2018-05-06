import React from 'react';
import styled, {css} from 'styled-components';
import {BREAKPOINTS} from "../constants";

export const Paragraph = styled.p``;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const Text = styled.span``;

export const BigTitle = styled.h1`
    font-size: 48px;
    margin: 0;
`;

const underLineEffect = css`
  &:hover {
    color: #000;
  }
  
  &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #000;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
  }
  
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export const Link = styled.a`
  text-decoration: none !important;
  color: #000 !important; 
  font-weight: 100;
  ${({noEffect, noEffectResponsive}) => {
      if(noEffectResponsive) {
          return `
            @media screen and (min-width: ${BREAKPOINTS.sm}) {
                ${underLineEffect}
            }
          `;
      }
      if(noEffect) {
          return '';
      }
      return noEffect;
} }
`;

export const Page = styled.div`
    width: 60%;
    margin: auto;
    
    @media screen and (max-width: ${BREAKPOINTS.sm}) {
      width: 80%;
    }
`;