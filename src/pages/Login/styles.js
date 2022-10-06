import styled from "styled-components";
import detalhe from "../../assests/img/detalhe-login.png";

export const Container = styled.div`
  width: 100vw;

  background: var(--color-green-7);

  main {
    margin-left: 112px;
    width: 100%;
    height: 928px;

    display: flex;
    align-items: flex-end;

    .content {
      width: 42%;
      height: 100%;
      padding-top: 128px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      h1 {
        font: var(--font-title-1);
        font-weight: 700;
        color: var(--color-primary-green);
      }
      p {
        text-align: center;
        width: 75%;
        font: var(--font-body-16);
        font-weight: 500;
        line-height: 150%;
        color: var(--color-green-2);
      }

      form {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 25px;

        .form-email {
          width: 100%;
          height: 72px;

          background: var(--color-green-7);
          border: 1px solid var(--color-green-6);
          border-radius: 5px;

          align-items: center;
          display: flex;
          padding-left: 28px;

          input {
            width: 80%;
            height: 100%;
            padding-left: 13px;
            background-color: transparent;
            border: none;
          }
        }

        .form-password {
          width: 100%;
          height: 72px;

          background: var(--color-green-7);
          border: 1px solid var(--color-green-6);
          border-radius: 5px;

          align-items: center;
          display: flex;
          padding-left: 28px;

          input {
            width: 80%;
            height: 100%;
            padding-left: 13px;
            background-color: transparent;
            border: none;
          }
        }

        p {
          width: 100%;
          text-align: end;
          cursor: pointer;
          u {
            :hover {
              filter: brightness(1.8);
            }
          }
        }

        button {
          margin: 0 auto;
          width: 309px;
          height: 68px;

          border: none;
          background: var(--color-gradient-1);
          box-shadow: 0px 8px 55px rgba(166, 38, 123, 0.38);
          border-radius: 5px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;

          color: var(--color-grey-6);

          :hover {
            scale: 1.05;
            filter: brightness(1.2);
            transition: all 0.4s ease;
          }
        }
      }

      span {
        margin-top: 106px;
        display: flex;
        align-items: center;

        p {
          width: 100%;
          font: var(--font-body-18);
          font-weight: 400;
          color: var(--color-grey-3);

          u {
            cursor: pointer;
            font-weight: 700;
            color: var(--color-green-3);
            :hover {
              filter: brightness(1.8);
            }
          }
        }
      }
    }

    .ilustrate {
      z-index: 2;
      width: 60%;
      height: 130%;
      background: var(--color-gradient-3);

      .ilustrate-detalhe {
        width: 100%;
        height: 100%;

        background-image: url(${detalhe});
        background-repeat: no-repeat;
        background-position: right bottom;

        display: flex;
        align-items: center;

        figure {
        }
      }
    }
  }
`;
