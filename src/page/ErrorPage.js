import errorStyle from "../styles/Error.module.css";
import "../index.css";
import ErrorImage from "../files/ErrorImage.png";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function LoginPage() {
  return (
    <div>
      <Header />
      <main className="loginMane">
        <div className="loginmainContainer">
          <div className="loginContainer">
            <p className="error">Error 404</p>
            <h1 className="hey">Hey Buddy</h1>
            <p className="bottomHey">
              We can’t seem to find the page you are looking for.
            </p>

            <a href="/">Go home</a>
          </div>
          <img src={ErrorImage}></img>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
