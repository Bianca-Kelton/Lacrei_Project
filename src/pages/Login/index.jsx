import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLock } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsEyeSlash } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import iMac from '../../assests/img/iMac-login.png';

const Login = () => {
  return (
    <Container>
      <Header />

      <main>
        <div className="content">
          <h1>Portal Lacrei Saúde</h1>
          <p>
            Encontre profissionais da saúde capacitades a ouvir o que você tem a
            dizer, com respeito e segurança!
          </p>

          <form>
            <div className="form-email">
              <HiOutlineMail size={22} color='#007756' />
              <input type="text" placeholder="Digite seu email" />
            </div>

            <div className="form-password">
              <AiOutlineLock size={22} color='#007756' />
              <input type="password" placeholder="Digite sua senha" />
              <BsEyeSlash size={22} />
            </div>

            
            <p><u>Esqueceu sua senha?</u></p>

            <button>
              Entrar
              <FiLogOut />
            </button>
          </form>

          <span>
            <p>Ainda não é cadastrade? <u>Crie sua conta</u></p>
            <IoIosArrowForward size={22} />
          </span>
        </div>

        <div className="ilustrate">
          <div className="ilustrate-detalhe">
            <figure>
              <img src={iMac} alt="" />
            </figure>
          </div>
        </div>
      </main>

      <Footer />
    </Container>
  );
};

export default Login;
