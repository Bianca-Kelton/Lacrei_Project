import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  Container,
  Section_01,
  Section_atendimento,
  Section_avalie,
  Section_profissionais,
} from "./styles";

import { FiLogOut } from "react-icons/fi";
import AppleStore from "../../assests/img/Apple-store.svg";
import GooglePlay from "../../assests/img/Google-play.svg";
import Laptop from "../../assests/img/Laptop.png";
import Phone from "../../assests/img/iPhoneXR.png";
import imgAtendimento from "../../assests/img/img-atendimento.png";
import imgAvaliacao from "../../assests/img/img-avaliacao.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />

      <Section_01>
        <div className="content">
          <div className="content-up">
            <h1>Portal Lacrei Saúde</h1>

            <p>
              O Lacrei é o primeiro portal criado para conectar a comunidade
              LGBTQIA+ a profissionais de saúde que respeitam a diversidade
              oferecendo oportunidades de trabalho e desenvolvimento
              profissional.
            </p>

            <button onClick={() => navigate("/login")}>
              <p>Entrar no Portal Saúde</p>
              <FiLogOut size={26} />
            </button>
          </div>

          <div className="content-down">
            <p>Ou baixe o aplicativo disponivel na:</p>
            <div>
              <button className="google-play">
                <img src={GooglePlay} alt="" />
                <div>
                  <p>Download via</p>
                  <h3>Google Play</h3>
                </div>
              </button>
              <button className="apple-store">
                <img src={AppleStore} alt="" />
                <div>
                  <p>Download via</p>
                  <h3>Apple Store</h3>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="ilustrate">
          <figure>
            <img className="laptop" src={Laptop} alt="" />
            <img className="phone" src={Phone} alt="" />
          </figure>
        </div>
      </Section_01>

      <Section_atendimento data-aos="fade-up-right">
        <div className="ilustrate">
          <figure>
            <img src={imgAtendimento} alt="" />
          </figure>
        </div>

        <div className="content">
          <h2>Atendimento acolhedor</h2>
          <h1>Encontre o profissional para sua necessidade</h1>
          <p>
            No portal você pode agendar suas consultas com profissionais de
            diferentes especialidades com a garantia de um atendimento
            acolhedor.
          </p>
        </div>
      </Section_atendimento>

      <Section_avalie data-aos="fade-up-left">
        <div className="content">
          <h1>Avalie sua experiência</h1>
          <p>
            Além disso, é possível avaliar cada profissional de acordo com sua
            experiência. Assim, você colabora para a construção de uma rede cada
            vez mais acolhedora.
          </p>
        </div>

        <div className="ilustrate">
          <figure>
            <img src={imgAvaliacao} alt="" />
          </figure>
        </div>
      </Section_avalie>

      <Section_profissionais data-aos="flip-up">
        <div>
          <h1>Faça parte dessa rede de profissionais</h1>
          <p>
            Se você atua na área de saúde e acredita que faz (e pode continuar
            fazendo) a diferença para um mundo mais igualitário, inclusivo e
            acolhedor, você está no lugar certo.
          </p>
        </div>

        <span>
          <button>Quero ser ume profissional</button>
        </span>
      </Section_profissionais>

      <Footer />
    </Container>
  );
};

export default LandingPage;
