import React, {Component} from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const LazySearchPage = loadable(() => import('./containers/search/Search'));

class App extends Component {
  getRoutes = () => {
    return (
      <Router>
        <Route exact path="/" component={LazySearchPage} />
      </Router>
    );
  };

  render() {
    return (
      <div className={styles['app']}>
        <header className={styles['header']}>
          <img src={logo} className={styles['logo']} alt="logo" />
          <h1 className={styles['title']}>Search</h1>
        </header>
        <section className={styles['routes']}>{this.getRoutes()}</section>
      </div>
    );
  }
}

export default App;
