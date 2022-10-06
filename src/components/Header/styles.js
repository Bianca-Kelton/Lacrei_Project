import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 125px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7.4%;

  figure{
    cursor: pointer;
  }

  nav {
    z-index: 100;
    display: flex;
    gap: 40px;

    button {
      background-color: transparent;
      border: none;

      display: flex;
      align-items: center;
      gap: 8px;

      color: white;
      p {
        font: var(--font-body-16);
        font-weight: 500;
      }
    }
  }
`;
