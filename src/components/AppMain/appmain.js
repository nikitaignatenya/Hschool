import firstimage from "../../files/Frame.svg";
import secondimage from "../../files/secondImage.png";
import boots from "../../files/Boots.svg";
import microfon from "../../files/Microfon.svg";
import thirdimage from "../../files/Image3.png";
import fourimage from "../../files/fourimage.png";

import appMainStyle from "./Appmain.module.css";

function AppMain() {
  return (
    <main>
      <div className={appMainStyle.firstSectionBack}>
        <div className={appMainStyle.firstSection}>
          <div className={appMainStyle.firstSectionLeft}>
            <p className={appMainStyle.platformDescription}>
              E-COURSE PLATFORM
            </p>
            <h1 className={appMainStyle.firstSectionHead}>
              Learning and teaching online, made easy.
            </h1>
            <p className={appMainStyle.firstSectionP}>
              Any subject, in any language, on any device, for all ages!
            </p>
            <button>About platform</button>
            <div className={appMainStyle.leftContainerBottom}>
              <div className={appMainStyle.firstSectionlineImage}></div>
              <h2>
                600<span>+</span>
              </h2>
            </div>
            <p className={appMainStyle.firstSectionStudents}>Students</p>
          </div>
          <img
            className={appMainStyle.firstSectionImageRight}
            src={firstimage}
          />
        </div>
      </div>
      <div
        className={`${appMainStyle.firstSectionBack} ${appMainStyle.secondSectionBack}`}
      >
        <div
          className={`${appMainStyle.firstSection} ${appMainStyle.secondSection}`}
        >
          <img
            className={`${appMainStyle.firstSectionImageRight} ${appMainStyle.secondtSectionImageLeft}`}
            src={secondimage}
          />
          <div className={appMainStyle.firstSectionLeft}>
            <h1 className={appMainStyle.firstSectionHead}>
              Learn a language in a playful way
            </h1>
            <p
              className={`${appMainStyle.firstSectionP} ${appMainStyle.secondSectionP}`}
            >
              Make learning programming languages more fun with mini-games
            </p>
            <div className={appMainStyle.imageContainerSecond}>
              <div className={appMainStyle.secondImageLeft}>
                <img src={boots}></img>
                <p>Sprint →</p>
              </div>
              <div className={appMainStyle.secondImageRight}>
                <img src={microfon} className={appMainStyle.imageRight}></img>
                <p className={appMainStyle.secondP}>Tasks →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${appMainStyle.firstSectionBack} ${appMainStyle.thirdSectionBack}`}
      >
        <div className={appMainStyle.firstSection}>
          <div className={appMainStyle.firstSectionLeft}>
            <h1 className={appMainStyle.firstSectionHead}>
              Increase your knowledge
            </h1>
            <p className={appMainStyle.firstSectionP}>
              Traditional and new effective approaches to learning languages
            </p>
            <button>Textbook →</button>
          </div>
          <img
            className={`${appMainStyle.firstSectionImageRight} ${appMainStyle.thirdSectionImageRight}`}
            src={thirdimage}
          />
        </div>
      </div>
      <div
        className={`${appMainStyle.firstSectionBack} ${appMainStyle.fourSectionBack}`}
      >
        <div className={appMainStyle.firstSection}>
          <img
            className={`${appMainStyle.firstSectionImageRight} ${appMainStyle.thirdSectionImageRight}`}
            src={fourimage}
          />
          <div className={appMainStyle.firstSectionLeft}>
            <h1 className={appMainStyle.firstSectionHead}>
              Watch your progress every day
            </h1>
            <p className={appMainStyle.firstSectionP}>
              Save statistics on your achievements and mistakes
            </p>
            <button>Statistics →</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AppMain;
