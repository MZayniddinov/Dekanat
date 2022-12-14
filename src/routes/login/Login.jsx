//components
import LoginCard from '../../components/login-card/LoginCard';
//CSS
import c from './Login.module.css';
const Login = () => {
  return (
    <div className={c["login"]}>
      <LoginCard/>
    </div>
  )
}

export default Login