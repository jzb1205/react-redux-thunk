import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom'
import './index.css';
import Layout from './layout/index'

const App = ()=>{
    return (
        <React.StrictMode>
          <HashRouter >
              <Layout/>
          </HashRouter>  
        </React.StrictMode>
    );
}
ReactDOM.render(<App/>, document.getElementById('root'));

