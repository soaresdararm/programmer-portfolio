import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: header;
  gap: 24px;

  img {
    border-radius: 24px;
  }

  h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: var(--text-primary);
  }

  h2 {
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: var(--text-secondary);
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;

    h1 {
      font-size: 36px;
      line-height: 54px;
    }

    h2 {
      font-size: 30px;
      line-height: 45px;
      font-style: normal;
    }

    img {
      border-radius: 100%;
      border: 2px solid white;
      height: 200px;
      width: 200px;
    }
  }
`;
