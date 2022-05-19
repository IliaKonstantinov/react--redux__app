import { useDispatch, useSelector } from 'react-redux'
import { filerByCity, filerByName, getByName, getUsers } from '../../../features/users/usersSlice';
import './FilterPage.scss';


const FilterUsers = () =>{

  const dispatch = useDispatch();

  return(
    <div className="filter__container">
      <h2 className='filter__title'>Отфильтровать в алфавитном порядке</h2>
      <button onClick={() => dispatch(filerByCity())} className='filter__btn'>По городу</button>
      <button onClick={() => dispatch(filerByName())} className='filter__btn'>По имени</button>
      <h2 className='filter__title'>Поиск по почте</h2>
      <input className='filter__input' placeholder='Введите почту' onChange={(e) => {
        if(e.target.value){
          dispatch(getByName(e.target.value));
        }
        else{
          dispatch(getUsers());
        }
      }}/>
    </div>
  );
}

export default FilterUsers;