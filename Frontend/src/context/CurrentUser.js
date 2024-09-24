import { useEffect, createContext, useState } from "react";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const getLoggedInUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('No token found');
                    return;
                }
                console.log(token)
                const response = await fetch('http://localhost:5000/authentication/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const user = await response.json();
                setCurrentUser(user);
            } catch (error) {
                console.error('Error fetching user profile:', error.message || error);
            }
        };
        getLoggedInUser();
    }, []);

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    );
}

export default CurrentUserProvider;