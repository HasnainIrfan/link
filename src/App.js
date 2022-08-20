import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Pannel from './Pages/Pannel/Pannel';
function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Pannel' element={<Pannel/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
