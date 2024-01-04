import styled from "styled-components";

export const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    filter: grayscale(100%);
  }

  .experience-unit {
    width: 300px;
    height: 30px;
    border-radius: 24px;
    border: 1px solid var(--text-secondary);

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .experience-measure {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;

      border-radius: 24px;
      height: 30px;
      border: 1px solid linear-gradient(90deg, #777cf4 2.62%, #f47777 93.38%);
      background: linear-gradient(90deg, #777cf4 2.62%, #f47777 93.38%);

      color: var(--text-primary);
      font-weight: 300;
      text-align: center;
      font-size: 12px;

      &.measure-1 {
        width: 33%;
      }

      &.measure-2 {
        width: 66%;
      }

      &.measure-3 {
        width: 100%;
      }
    }
  }
`;
