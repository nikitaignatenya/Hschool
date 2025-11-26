import registerStyle from "../styles/Register.module.css";
import "../index.css";
import RegisterImage from "../files/RegisterImage.png";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function RegisterPage() {
  return (
    <div>
      <Header />

      <main className={registerStyle.registerMane}>
        <div className={registerStyle.registermainContainer}>
          <div className={registerStyle.registerContainer}>
            <h1>SignIn</h1>
            <input
              className={`${registerStyle.inputEmail} ${registerStyle.input}`}
              placeholder="Placeholder text "
            ></input>
            <input
              className={`${registerStyle.inputPassword} ${registerStyle.input}`}
              placeholder="Placeholder text"
            ></input>
            <input
              className={`${registerStyle.inputPassword} ${registerStyle.input}`}
              placeholder="Placeholder text"
            ></input>
            <input
              className={`${registerStyle.inputPassword} ${registerStyle.input}`}
              placeholder="Placeholder text"
            ></input>
            <button>SignUp</button>
          </div>
          <img src={RegisterImage}></img>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RegisterPage;
