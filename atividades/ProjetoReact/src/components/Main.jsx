import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BattleShip } from './BattleShip';
import { SignUp } from './SignUp';
import { CreateAccount } from './CreateAccount';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<SignUp />}></Route>
      <Route exact path='/BattleShip' element={<BattleShip />}></Route>
      <Route exact path='/createAccount' element={<CreateAccount />}></Route>
    </Routes>
  );
}



export default Main;