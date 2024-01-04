import React, { ReactNode } from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --text-primary: white;
    --text-secondary: #B3B3B3;
    --bg-primary: #2C2C2C;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Your Preferred Font', sans-serif; 
  }
`;

const Container = styled.main`
  padding: 40px 32px;
  display: grid;
  gap: 24px;
  justify-items: center;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "header"
    "btns"
    "experience"
    "info";

  @media (min-width: 768px) {
    padding: 70px 60px;
    height: 100vh;
    grid-template-rows: fit-content(100%);
    grid-template-columns: 60% 30%;
    align-items: center;
    justify-items: start;
    justify-content: space-between;
    grid-template-areas:
      "header info"
      "experience btns";
  }
`;
type Props = {
  children?: ReactNode;
  title?: string;
};

const LayoutWrapper = styled.div``;

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <LayoutWrapper>
    <GlobalStyle />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>{children}</Container>
  </LayoutWrapper>
);

export default Layout;
