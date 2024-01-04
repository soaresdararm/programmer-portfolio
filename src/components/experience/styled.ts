import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  gap: 24px;
  grid-area: experience;

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: var(--text-secondary);
    text-align: center;
  }

  .experience-time {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: 768px) {
    align-items: flex-start;

    p {
      font-size: 20px;
      line-height: 36px;
      text-align: start;
    }
  }
`;