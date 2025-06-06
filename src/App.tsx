import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Container, Box } from '@mui/material';
import UserForm from './components/UserForm';
import UserList from './pages/UserList';

const App: React.FC = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to right, #e3f2fd, #bbdefb)', py: 4 }}>
      <Container maxWidth="sm">
        <AppBar position="static" color="default" sx={{ mb: 4, borderRadius: 2 }}>
          <Tabs value={tab} onChange={handleChange} centered>
            <Tab label="Cadastrar" />
            <Tab label="Visualizar" />
          </Tabs>
        </AppBar>

        {tab === 0 && <UserForm />}
        {tab === 1 && <UserList />}
      </Container>
    </Box>
  );
};

export default App;
