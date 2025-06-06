import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './pages/UserList';
import { AppBar, Toolbar, Button } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Cadastrar</Button>
          <Button color="inherit" component={Link} to="/visualizar">Visualizar</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/visualizar" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
