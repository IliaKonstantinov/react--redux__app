import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../features/users/usersSlice";
import { useEffect } from "react";
import './UsersPage.scss';

const UsersPage = () =>{
  const users = useSelector(state => state.posts.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  return(
    <div className="users__container">
      <h2 className="users__title">Список пользователей</h2>
      <div className="users__items">
        {
          users?.map(user=> (
            <div className="users__item" key={user.id}>
              <p className="users__name">Имя: {user.name}</p>
              <p className="users__city">Город: {user.address.city}</p>
              <p className="users__company">Почта: {user.email}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default UsersPage;