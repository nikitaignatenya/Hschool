import "../index.css";

import firstimage from "../files/Frame.svg";
import secondimage from "../files/secondImage.png";
import boots from "../files/Boots.svg";
import microfon from "../files/Microfon.svg";
import thirdimage from "../files/Image3.png";
import fourimage from "../files/fourimage.png";

import Header from "../components/Header/header";
import AppMain from "../components/AppMain/appmain";
import Footer from "../components/Footer/footer";

function MainPage() {
  return (
    <div className="App">
      <Header />
      <AppMain />
      <Footer />
    </div>
  );
}

export default MainPage;
