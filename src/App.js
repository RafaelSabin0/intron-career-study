import './App.css';
import AdminDahsboard from './components/admin-dashboard';
import HomePage from './components/home-content';
import LoginPage from './components/login-page';
import LoginAdmin from './components/login-admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<AdminDahsboard/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin-login" element={<LoginAdmin/>}/>
        </Routes>
    </Router>
  );
}

export default App;
