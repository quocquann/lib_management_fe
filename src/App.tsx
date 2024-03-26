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
import RequestPage from './features/library/pages/RequestPage/RequestPage';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute';


function App() {
  return <>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="" element={<Navigate to="home"/>}/>

            <Route path="" element={<HomeLayout/>}>
              <Route path="login" element={<LoginPage/>}/>
              <Route path="home" element={<HomePage/>}/>
              <Route path="detail/:id" element={<BookDetailPage/>}/>  
              <Route path="all-book" element={<SearchBookPage/>}/>
              <Route path="borrow" element={<BorrowPage/>}/>
              <Route path="history" element={<PrivateRoute><HistoryPage/></PrivateRoute>}/>
              <Route path="calendar" element={<PrivateRoute><CalendarPage/></PrivateRoute>}/>
              <Route path="request" element={<PrivateRoute><RequestPage/></PrivateRoute>}/>
            </Route>
          </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </ThemeProvider>
  </>;
}

export default App;
