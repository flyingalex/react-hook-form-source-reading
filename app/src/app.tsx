import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Basic from './basic';
import AsyncFieldValidation from './asyncFieldValidation';
import AsyncSetFormValues from './asyncSetFormValues';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/basic" exact component={Basic} />
      <Route path="/asyncFieldValidation" exact component={AsyncFieldValidation} />
      <Route path="/asyncSetFormValues" exact component={AsyncSetFormValues} />
    </Router>
  );
};

export default App;
