import headerStyle from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={headerStyle.headerContainer}>
        <a className={headerStyle.headerName} href="/">
          Hschool
        </a>
        <div className={headerStyle.headerLoginContainer}>
          <a href="/Login" className={headerStyle.loginButton}>
            Login →
          </a>
          <a className={headerStyle.headerSignButton} href="/register">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
