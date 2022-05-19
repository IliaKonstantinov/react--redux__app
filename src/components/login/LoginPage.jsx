import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { setLogin, setPassword } from '../../features/login/loginSlice';
import './LoginPage.scss';

const LoginPage = () =>{


  const login = useSelector(state => state.login.login)
  const password = useSelector(state => state.login.password)
  const dispatch = useDispatch()

  return(
    <div className="login__container">
      <h1 className='login__title'>Войти</h1>
      <input className="login__input" placeholder="Ваш логин" onChange={(e)=>{
        dispatch(setLogin(e.target.value))
      }}/>
      <input className="login__input" placeholder="Ваш пароль" onChange={(e) => dispatch(setPassword(e.target.value))}/>
      <Link to='/users' className={`login__btn ${login === 'user12'&& password === 'pass123' ? '': 'btn--disabled'}`}>Подтвердить</Link>
    </div>
  );
}

export default LoginPage;