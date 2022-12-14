import { Link } from "react-router-dom";
//images
import logo from "../../assets/logo/logo.png";
//CSS
import c from "./LoginCard.module.css";

const LoginCard = () => {
  return (
    <div className={c["login-card"]}>
      <form className={c["login-card-form"]}>
        <div className={c["login-logo"]}>
          <img src={logo} alt="" />
        </div>
        <div className={c["login-title"]}>Login</div>
        <div className={c["login-inputs"]}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
        <div className={c["forgot-password"]}>
          <Link className={c["forgot-password__link"]} to="/">
            Forgot your password?
          </Link>
        </div>
        <button className={c["btn-submit"]} type="submit">
          Login
        </button>
        <div className={c["help"]}>
          <Link className={c["help-link"]} to="/">
            Help
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
