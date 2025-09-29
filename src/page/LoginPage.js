import loginStyle from "../styles/Login.module.css";
import "../index.css";

import RegisterImage from "../files/RegisterImage.png";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function LoginPage() {
  return (
    <div>
      <Header />
      <main className={loginStyle.loginMane}>
        <div className={loginStyle.loginmainContainer}>
          <div className={loginStyle.loginContainer}>
            <h1>Login</h1>
            <input
              className={`${loginStyle.inputEmail} ${loginStyle.input}`}
              placeholder={`${loginStyle.Placeholder} ${loginStyle.text}`}
            ></input>
            <input
              className={`${loginStyle.inputPassword} ${loginStyle.input}`}
              placeholder={`${loginStyle.Placeholder} ${loginStyle.text}`}
            ></input>
            <button>Login</button>
          </div>
          <img src={RegisterImage}></img>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
