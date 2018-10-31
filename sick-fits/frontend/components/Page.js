import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3a3a3a',
  lightGrey: '#e1e1e1',
  lightgray: '#e1e1e1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black}
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background: white;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;-moz-box-sizing: inherit;box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
        <Meta/>
        <Header/>
        <Inner>{this.props.children}</Inner>
      </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
