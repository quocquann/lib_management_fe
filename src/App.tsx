import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './features/authentication/pages/LoginPage/LoginPage';
import HomePage from './features/library/pages/HomePage/HomePage';

function App() {
  return <>
   <BrowserRouter>
        <Routes>
          <Route path="" element={<Navigate to="home"/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="home" element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
  </>;
}

export default App;
