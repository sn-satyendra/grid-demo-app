import React, {Component} from 'react';
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
        {this.getRoutes()}
      </div>
    );
  }
}

export default App;
