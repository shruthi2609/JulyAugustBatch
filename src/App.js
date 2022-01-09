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
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'*/
import Profile from './Components/Profile';
import Login from './Components/Login';
function App(){
return(
/*<Router>
    <div>
        <nav>
            <Link to="/counter">Counter Application</Link>
            <Link to="/imagesearch">Image Search</Link>
        </nav>
        <h3>Sample</h3>
        <Routes>
            <Route path="/counter" element={<Counter></Counter>}></Route>
            <Route path="/imagesearch" element={<ImageSearchHooks/>}></Route>
        </Routes>
    </div>
</Router>*/
<div>
    <Profile></Profile>
    <Login></Login>
</div>
)
}
//jsx
// 
export default App;