import React,{useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';
 
const Home = (props) => {
  const authCtx = useContext(AuthContext)
  console.log(authCtx)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onclick={authCtx.onLogout}>Log out</Button>
    </Card>
  );
};

export default Home;
