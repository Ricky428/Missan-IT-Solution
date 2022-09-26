import './App.css';
import LoginForm from './components/LoginForm';
import WorkPane from './components/dashboard/workPane/WorkPane';
import { Route, Routes } from 'react-router-dom';
// import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<LoginForm/>}></Route>
      <Route path='/dashboard' element={<WorkPane/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
