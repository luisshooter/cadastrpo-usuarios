import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, CardActions,
  Typography, IconButton, Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { User } from '../types/User';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  }, []);

  const handleDelete = (index: number) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Usuários Cadastrados</Typography>
      {users.map((u, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography><strong>Nome:</strong> {u.name}</Typography>
            <Typography><strong>Email:</strong> {u.email}</Typography>
            <Typography><strong>Telefone:</strong> {u.phone}</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <IconButton color="error" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default UserList;
