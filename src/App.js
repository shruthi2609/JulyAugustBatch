import React from 'react'
/*import ProductComponent from './Components/DemoComponent';
import ClassComponent from './Components/ClassComponent';
import Counter from './Components/CounterComponent';
import TodoComponent from './Components/TodoComponent'
import LifeCylceDemo from './Components/LifeCycleMethods'
import TodoAPI from './Components/API/ToDoAPI';
import ImageSearch from './Components/API/ImageSearch';
import HooksEg from './Components/HooksEg';
import CounterHooks from './Components/CounterHooks';
import ImageSearchHooks from './Components/API/ImageSearchHooks';
import HookLifecycle from './Components/HookLifeCycle';
import Profile from './Components/Profile';
import Login from './Components/Login';*/
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import HooksEg from './Components/HooksEg';
import ImageSearch from './Components/API/ImageSearch';

function App(){
return(
<Router>
    <div>
        <nav>
            <Link to="/login">Signin</Link>

           
        </nav>
       
        <Routes>
            <Route path="/login" element={<HooksEg></HooksEg>}></Route>
          <Route path="/search" element={<ImageSearch></ImageSearch>}></Route>
        </Routes>
    </div>
</Router>

)
}
//jsx
// 
export default App;