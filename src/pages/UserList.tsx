import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { User } from '../types/User';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('users');
    if (stored) setUsers(JSON.parse(stored));
  }, []);

  const handleDelete = (index: number) => {
    const updated = [...users];
    updated.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(updated));
    setUsers(updated);
  };

  return (
    <Paper sx={{ p: 4, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Usuários Cadastrados
      </Typography>
      <List>
        {users.map((user, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={user.name}
              secondary={
                <>
                  <div>Email: {user.email}</div>
                  <div>Telefone: {user.phone}</div>
                  <div>CPF: {user.cpf}</div>
                  <div style={{ color: 'red' }}>Senha: ****</div>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default UserList;
