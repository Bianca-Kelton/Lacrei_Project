import styled from "styled-components";
import bgSection1 from "../../assests/img/bg-section-1.svg";

export const Container = styled.div`
  width: 100vw;
  background: var(--color-green-7);
`;

export const Section_01 = styled.section`
  width: 100%;
  height: 651px;
  background: var(--color-green-7);

  border-radius: 8px;

  padding-left: 7.4%;
  display: flex;
  align-items: end;

  .content {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 70px;

    .content-up {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      h1 {
        font: var(--font-title-1);
        font-weight: 700;
        color: var(--color-primary-green);
      }
      p {
        width: 70%;

        font: var(--font-body-16);
        font-weight: 400;
        color: var(--color-grey-3);
        line-height: 150%;
      }
      button {
        width: 309px;
        height: 68px;
        margin-top: 8px;

        background: var(--color-gradient-1);
        border: none;
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        color: white;

        :hover {
          filter: brightness(1.2);
          transition: all 0.4s ease;
        }

        p {
          font: var(--font-body-18);
          font-weight: 700;
          color: var(--color-grey-6);
        }
      }
    }

    .content-down {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;

      p {
        font: var(--font-body-16);
        font-weight: 500;
        color: var(--color-grey-3);
      }

      div {
        display: flex;
        gap: 10px;

        button {
          width: 161px;
          height: 58px;

          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;

          background: var(--color-grey-6);
          border: 1.37024px solid var(--color-green-3);
          border-radius: 7.3px;

          div {
            display: flex;
            flex-direction: column;
            gap: -2;

            p {
              font: var(--font-body-12);
              font-weight: 400;
              color: var(--color-green-3);
            }
            h3 {
              font: var(--font-body-14);
              font-weight: 700;
              color: var(--color-green-3);
            }
          }
        }
      }
    }
  }

  .ilustrate {
    z-index: 1;
    display: flex;

    width: 70%;
    height: 120%;

    background-image: url(${bgSection1});
    background-repeat: no-repeat;
    background-position: center;

    figure {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .laptop {
        width: 870px;
        margin-left: -96px;
        margin-bottom: 5px;
      }
      .phone {
        width: 275px;
        margin-left: -360px;
        margin-bottom: 5px;
      }
    }
  }
`;

export const Section_atendimento = styled.section`
  margin-top: 112px;
  width: 100%;
  height: 545px;

  display: flex;

  background: var(--color-green-7);
  .ilustrate {
    width: 45%;
    height: 100%;
    background: linear-gradient(86.02deg, #018383 15.85%, #36b390 121.65%);
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .content {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    padding-left: 8%;

    h2 {
      font: var(--font-body-14);
      font-weight: 500;
      color: var(--color-green-3);
    }
    h1 {
      width: 70%;
      font: var(--font-title-2);
      font-weight: 700;
      color: var(--color-green-3);
    }
    p {
      width: 82%;
      font: var(--font-body-14);
      font-weight: 500;
      color: var(--color-grey-3);
      line-height: 27px;
    }
  }
`;

export const Section_avalie = styled.section`
  margin-top: 112px;
  width: 100%;
  height: 552px;

  display: flex;

  background: var(--color-green-7);

  .content {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 12px;

    padding-left: 112px;

    h1 {
      width: 70%;
      font: var(--font-title-2);
      font-weight: 700;
      color: var(--color-green-3);
    }
    p {
      width: 78%;
      font: var(--font-body-16);
      font-weight: 400;
      color: var(--color-grey-3);
      line-height: 27px;
    }
  }
  .ilustrate {
    width: 45%;
    height: 100%;
    display: flex;
    align-items: flex-end;

    figure {
    }
  }
`;

export const Section_profissionais = styled.section`
  margin-bottom: 80px;
  width: 100%;
  height: 368px;

  background-image: url(${bgSection1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  div {
    margin: 0 auto;
    width: 60%;
    height: 88%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    h1 {
      text-align: center;
      width: 70%;
      font: var(--font-title-2);
      font-weight: 700;
      color: var(--color-grey-6);
    }
    p {
      text-align: center;
      width: 78%;
      font: var(--font-body-16);
      font-weight: 400;
      color: var(--color-grey-6);
      line-height: 27px;
    }
  }

  span {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      margin: 0 auto;
      width: 309px;
      height: 67px;

      background-color: var(--color-grey-6);
      border: 2px solid var(--color-primary-rosa);
      border-radius: 5px;

      font: var(--font-body-16);
      color: var(--color-grey-2);
    }
    button:hover {
      background-color: var(--color-primary-rosa);
      font: var(--font-body-16);
      color: var(--color-grey-6);
      transition: all 0.5s ease;
    }
  }
`;
