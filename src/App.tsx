import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './features/authentication/pages/LoginPage/LoginPage';
import HomePage from './features/library/pages/HomePage/HomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import BookDetailPage from './features/library/pages/BookDetailPage/BookDetailPage';
import HomeLayout from './shared/Layouts/HomeLayout/HomeLayout';

function App() {
  return <>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <BrowserRouter>
          <Routes>
            <Route path="" element={<Navigate to="home"/>}/>
            <Route path="login" element={<LoginPage/>}/>
            
            <Route path="home" element={<HomeLayout/>}>
              <Route path="" element={<HomePage/>}/>
              <Route path="detail" element={<BookDetailPage/>}/>  
            </Route>
          </Routes>
      </BrowserRouter>
  </ThemeProvider>
  </>;
}

export default App;
