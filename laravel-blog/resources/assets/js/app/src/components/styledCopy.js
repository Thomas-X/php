import React from 'react';
import styled, {css} from 'styled-components';
import {BREAKPOINTS, colors} from "../constants";
import {stepSize} from "./ChangingListOfPerson";

export const Paragraph = styled.p``;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const Text = styled.span``;

// 1 rem = 17.3333 offset
export const BigTitle = styled.h1`
    font-size: 3rem;
    margin: 0;
    color: ${colors.textColor}
    line-height: ${stepSize};
`;

export const BigParagraph = styled.p`
  font-size: 24px;
  font-weight: 500;
  ${({ italic }) => italic ? 'font-style: italic;' : ''}
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
    width: 80%;
    margin: auto;
    
    @media screen and (max-width: ${BREAKPOINTS.lg}) {
      width: 70%;
    }
    
    @media screen and (max-width: ${BREAKPOINTS.md}) {
      width: 80%;
    }
    
    @media screen and (max-width: ${BREAKPOINTS.sm}) {
      width: 90%;
    }
`;

export const PageRules = css`
  width: 60%;
  
    margin: 0 auto;
    
    @media screen and (max-width: ${BREAKPOINTS.lg}) {
      width: 70%;
    }
    
    @media screen and (max-width: ${BREAKPOINTS.md}) {
      width: 80%;
    }
    
    @media screen and (max-width: ${BREAKPOINTS.sm}) {
      width: 90%;
    }
`;