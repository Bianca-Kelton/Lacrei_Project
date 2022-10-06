import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 190px;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    border-top: 1px solid var(--color-grey-4);
    width: 85%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    figure {
      display: flex;
      align-items: center;
      gap: 18px;

      p {
        width: 200px;
        font: var(--font-body-16);
        font-weight: 400;
        line-height: 170%;
        color: var(--color-grey-3);
      }
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p {
        font: var(--font-body-16);
        font-weight: 400;
        line-height: 170%;
        color: var(--color-grey-3);
      }
      span {
        display: flex;
        align-items: center;
        gap: 12px;

        p {
          font: var(--font-body-16);
          font-weight: 400;
          line-height: 170%;
          color: var(--color-grey-3);
        }
      }
    }
  }
`;
