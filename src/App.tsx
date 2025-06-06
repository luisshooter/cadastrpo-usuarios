import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './pages/UserList';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #1e3c72, #2a5298)' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', gap: 2, mx: 'auto' }}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: '#2a5298',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#e0e0e0' },
              }}
            >
              Cadastrar
            </Button>
            <Button
              component={Link}
              to="/visualizar"
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: '#2a5298',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#e0e0e0' },
              }}
            >
              Visualizar
            </Button>
          </Box>
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
