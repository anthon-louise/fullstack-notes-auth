import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../services/userService";

function ProtectedRoute({children}) {
    const [isAuth, setIsAuth] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const result = await auth()
                if (result.success) {
                    setIsAuth(true)
                } else {
                    setIsAuth(false)
                }
            } catch (err) {
                setIsAuth(false)
            }
        }
        checkAuth()
    }, [])

    if (isAuth === null) {
        return <p>Loading...</p>
    }

    if (!isAuth) {
        return <Navigate to='/login' replace/>
    }

    return children
}

export default ProtectedRoute