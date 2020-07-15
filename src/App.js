import React from 'react';
import { Button } from 'react-bootstrap';

import Persons from './components/Person/Persons';
import Header from './components/common/Header';
import NewPerson from './components/Person/NewPerson';
import { useSelector, useDispatch } from 'react-redux';
import { setShowPersons } from './actions/showPerson';

const App = () => {
  const showPersons = useSelector((state) => state.showPersons);
  const dispatch = useDispatch();

  return (
    <div className='ltr text-center'>
      <Header appTitle='Person Manager' />

      <NewPerson />

      <Button
        onClick={() => dispatch(setShowPersons())}
        variant={showPersons ? 'info' : 'danger'}
      >
        Show persons
      </Button>

      {showPersons ? <Persons /> : null}
    </div>
  );
};
export default App;
