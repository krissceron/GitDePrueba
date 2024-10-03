import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import { User } from '../models/User';
import { useNavigate } from 'react-router-dom';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await UserService.getAllUsers();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const handleEdit = (user: User) => {
        navigate(`/edit/${user.usuId}`);
    };

    const handleDelete = async (user: User) => {
        await UserService.deleteUser(user.usuId);
        setUsers(users.filter(u => u.usuId !== user.usuId));
    };

    const handleView = (user: User) => {
        navigate(`/view/${user.usuId}`);
    };

    const handleCreate = () => {
        navigate('/create');
    };

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <button onClick={handleCreate}>Crear</button>
            <ul>
                {users.map(user => (
                    <li key={user.usuId}>
                        {user.usuNombre} {user.usuApellido}
                        <button onClick={() => handleView(user)}>Ver</button>
                        <button onClick={() => handleEdit(user)}>Editar</button>
                        <button onClick={() => handleDelete(user)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
