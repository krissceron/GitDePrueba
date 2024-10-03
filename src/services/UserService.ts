import axios from 'axios';
import { User } from '../models/User';

const API_URL = 'https://localhost:7249/api/Usuario';

const UserService = {
    getAllUsers: async () => {
        const response = await axios.get(`${API_URL}/Lista`);
        return response.data;
    },
    getUserById: async (id: number) => {
        const response = await axios.get(`${API_URL}/Obtener/${id}`);
        return response.data;
    },
    createUser: async (user: User) => {
        await axios.post(`${API_URL}/Nuevo`, user);
    },
    updateUser: async (user: User) => {
        await axios.put(`${API_URL}/Editar`, user);
    },
    deleteUser: async (id: number) => {
        await axios.delete(`${API_URL}/Eliminar/${id}`);
    }
};

export default UserService;
