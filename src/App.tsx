import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './features/authentication/pages/LoginPage/LoginPage';
import HomePage from './features/library/pages/HomePage/HomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import BookDetailPage from './features/library/pages/BookDetailPage/BookDetailPage';
import HomeLayout from './shared/layouts/HomeLayout/HomeLayout';
import BorrowPage from './features/library/pages/BorrowPage/BorrowPage';
import SearchBookPage from './features/library/pages/SearchBookPage/SearchBookPage';
import HistoryPage from './features/library/pages/HistoryPage/HistoryPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import CalendarPage from './features/library/pages/CalendarPage/CalendarPage';

function App() {
  return <>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="" element={<Navigate to="home"/>}/>
            <Route path="login" element={<LoginPage/>}/>
            
            <Route path="home" element={<HomeLayout/>}>
              <Route path="" element={<HomePage/>}/>
              <Route path="detail" element={<BookDetailPage/>}/>  
              <Route path="borrow" element={<BorrowPage/>}/>
              <Route path="search" element={<SearchBookPage/>}/>
              <Route path="history" element={<HistoryPage/>}/>
              <Route path="calendar" element={<CalendarPage/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </ThemeProvider>
  </>;
}

export default App;
