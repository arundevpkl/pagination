import { Link,useHistory} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const MainNavigation = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const logoutHandler = () => {
  dispatch(authActions.logout())
  history.replace('/auth')
  };
  
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated)
  const userName = useSelector(state=>state.auth.names)

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>{!isLoggedIn ? 'Pagination':userName}</div>
      </Link>
      <nav>
        <ul>
        {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/users'>Users</Link>
            </li>
          )}
           {isLoggedIn && (
            <li>
              <Link to='/comments'>Comments</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>logout</button>
            </li>
          )}


        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
