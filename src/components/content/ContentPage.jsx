import { useSelector } from "react-redux";
import FilterUsers from "./filter/FilterUsers";
import UsersPage from "./users/UsersPage";
import './ContentPage.scss'

const ContentPage = () =>{

  let login = useSelector(state => state.login.login)
  if(!login){
    login = 'незнакомец'
  }

  return(
    <div className="content__container">
      <h1 className="content__title">Привет, {login}</h1>
      <div className="content__main">
        <FilterUsers />
        <UsersPage />
      </div>
    </div>
  );
};

export default ContentPage;