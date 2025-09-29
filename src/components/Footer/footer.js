import footerStyle from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={footerStyle.footerContainer}>
        <div className={footerStyle.footerFirstContainer}>
          <div className={footerStyle.left}>
            <p>Home</p>
            <p>Textbook</p>
            <p>Statistics</p>
            <p>Sprint</p>
          </div>
          <div className={footerStyle.right}>
            <p>Alex</p>
            <p>Gabriel</p>
            <p>Marcus</p>
          </div>
        </div>
        <div className={footerStyle.footerSecondContainer}>
          <div className={footerStyle.left}>
            <div className={footerStyle.footerImage1}></div>
            <div className={footerStyle.footerImage2}></div>
            <div className={footerStyle.footerImage3}></div>
          </div>
          <p>
            ©2021 Hschool. Project for <span>Hschool</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
