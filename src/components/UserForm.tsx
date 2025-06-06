import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography
} from '@mui/material';
import type { User } from '../types/User';

const UserForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<User>>({});

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(phone);

  const validateCPF = (cpf: string) =>
    /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<User> = {};
    if (!validateEmail(user.email)) newErrors.email = 'Email inválido.';
    if (!validatePhone(user.phone)) newErrors.phone = 'Telefone inválido.';
    if (!validateCPF(user.cpf)) newErrors.cpf = 'CPF inválido.';
    if (!user.password || user.password.length < 4) newErrors.password = 'Senha muito curta.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    localStorage.setItem('users', JSON.stringify([...storedUsers, user]));
    setUser({ name: '', email: '', phone: '', cpf: '', password: '' });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <Paper elevation={8} sx={{ p: 4, maxWidth: 500, width: '100%' }}>
        <Typography variant="h5" gutterBottom align="center">
          Cadastro de Usuário
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth label="Nome" name="name" value={user.name}
                onChange={handleChange} required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth label="Email" name="email" value={user.email}
                onChange={handleChange} error={Boolean(errors.email)}
                helperText={errors.email} required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth label="Telefone" name="phone" value={user.phone}
                onChange={handleChange} error={Boolean(errors.phone)}
                helperText={errors.phone} placeholder="(99) 99999-9999" required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth label="CPF" name="cpf" value={user.cpf}
                onChange={handleChange} error={Boolean(errors.cpf)}
                helperText={errors.cpf} placeholder="000.000.000-00" required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth label="Senha" name="password" value={user.password}
                type="password"
                onChange={handleChange} error={Boolean(errors.password)}
                helperText={errors.password} required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit" fullWidth variant="contained"
                sx={{
                  background: 'linear-gradient(135deg, #ff6a00, #ee0979)',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': { background: 'linear-gradient(135deg, #ee0979, #ff6a00)' }
                }}
              >
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default UserForm;
