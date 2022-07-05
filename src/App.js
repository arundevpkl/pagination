
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import UserTablePage from './pages/UserTablePage';
import CommentsTablePage from './pages/CommentsTablePage';
import AuthPage from './pages/AuthPage';
import { useEffect } from 'react';
import { fetchCartData,fetchCommentData } from './store/fetchdata';

function App() {
  const authCtx = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCartData())
    dispatch(fetchCommentData())
  }, [dispatch])
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />

        </Route>
        {!authCtx && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}
        <Route path='/users'>
          {authCtx && <UserTablePage />}
          {!authCtx && <Redirect to='/' />}
        </Route>
        <Route path='/comments'>
          {authCtx && <CommentsTablePage />}
          {!authCtx && <Redirect to='/' />}
        </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
