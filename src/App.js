import logo from './logo.svg';
import './App.css';
import Home from  './component/Home'
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {
  return (
   <>
   
   <BrowserRouter>
   <Routes>
<Route  path='/' element={<Home />}>



</Route>



   </Routes>
   
   
   </BrowserRouter>
   
   
   
   </>
   
   
    );
}

export default App;
