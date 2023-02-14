import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreteTask from './CreateTask';

function App() {

  return (
    <div className='app'>
      { 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreteTask />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    }
    </div>
  )
}

export default App;
