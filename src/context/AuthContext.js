import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('adminToken'));
    const [admin, setAdmin] = useState(
        JSON.parse(localStorage.getItem('adminData') || 'null')
    );

    const login = (token, adminData) => {
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminData', JSON.stringify(adminData));
        setToken(token);
        setAdmin(adminData);
    };

    const logout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminData');
        setToken(null);
        setAdmin(null);
    };

    return (
        <AuthContext.Provider value={{ token, admin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}