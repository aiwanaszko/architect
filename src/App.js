import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import Projects from './components/views/Projects/Projects';
import Contact from './components/views/Contact/Contact';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <MainLayout>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
        <Route path={process.env.PUBLIC_URL + '/Contact'} component={Contact} />
        </Switch>
      </MainLayout>
      </BrowserRouter>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
