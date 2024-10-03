import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import { User } from '../models/User';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm: React.FC = () => {
    const [user, setUser] = useState<User>({
        usuId: 0,
        usuNombre: '',
        usuApellido: '',
        usuCedula: 0,
        usuCorreo: ''
    });
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();

    useEffect(() => {
        const fetchUser = async () => {
            if (id) {
                const fetchedUser = await UserService.getUserById(Number(id));
                setUser(fetchedUser);
            }
        };

        fetchUser();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            await UserService.updateUser(user);
        } else {
            await UserService.createUser(user);
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{id ? 'Editar Usuario' : 'Crear Usuario'}</h1>
            <input type="text" name="usuNombre" value={user.usuNombre} onChange={handleChange} placeholder="Nombre" required />
            <input type="text" name="usuApellido" value={user.usuApellido} onChange={handleChange} placeholder="Apellido" required />
            <input type="number" name="usuCedula" value={user.usuCedula} onChange={handleChange} placeholder="Cédula" required />
            <input type="email" name="usuCorreo" value={user.usuCorreo} onChange={handleChange} placeholder="Correo" required />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default UserForm;
