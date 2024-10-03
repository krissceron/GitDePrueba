import React, { useEffect, useState } from 'react';
import { User } from '../models/User';
import UserService from '../services/UserService';
import { useParams } from 'react-router-dom';

const UserDetail: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchUser = async () => {
            if (id) {
                const fetchedUser = await UserService.getUserById(Number(id));
                setUser(fetchedUser);
            }
        };

        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Detalles del Usuario</h1>
            <p><strong>ID:</strong> {user.usuId}</p>
            <p><strong>Nombre:</strong> {user.usuNombre}</p>
            <p><strong>Apellido:</strong> {user.usuApellido}</p>
            <p><strong>Cédula:</strong> {user.usuCedula}</p>
            <p><strong>Correo:</strong> {user.usuCorreo}</p>
            <button onClick={() => window.history.back()}>Volver</button>
        </div>
    );
};

export default UserDetail;
