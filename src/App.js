import React from 'react';
import { HashRouter, Link } from 'react-router-dom'

import { renderRoutes } from 'react-router-config';
import  { routes } from './router' 

/* 
应用的根组件
switch 只匹配其中一个
*/

function App(){
        return (
            <ul>
              <li>
                <Link to="/admin/1561">admin</Link>
              </li>
              <li>
                <Link to="/">login</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
            )

}
export default App;
