import styled from "styled-components";
import Layout from "../src/components/Layout";
import { Experience } from "../src/components/experience";
import { Header } from "../src/components/header";

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  grid-area: btns;
  width: 100%;

  .btn-primary {
    background: linear-gradient(90deg, #777cf4 2.62%, #f47777 93.38%);
    border-radius: 24px;
    width: 325px;
    padding: 12px;
    text-align: center;
    text-decoration: none;

    color: var(--text-primary);
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;
    border: none;

    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
  }
`;

const IndexPage = () => (
  <Layout title="Dara Soares">
    <Header />
    <Experience />
  </Layout>
);

export default IndexPage;
