import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/create" element={<UserForm />} />
                <Route path="/edit/:id" element={<UserForm />} />
                <Route path="/view/:id" element={<UserDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
