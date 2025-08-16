import Input from "../components/Input"
import Button from "../components/Button"
import { useState, useEffect } from "react"
import { loginUser, registerUser } from "../services/userService"

function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const data = await loginUser({username, password})
        if (data.success) {
            alert(data.message)
            setUsername('')
            setPassword('')
            console.log('success')
        } else {
            alert(data.message)
            console.log('unsuccess')
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <Input label='username' value={username} onChange={setUsername}/>
            <br />
            <Input label='password' value={password} onChange={setPassword}/>
            <br />
            <Button type='submit' label='submit' onClick={handleLogin}/>
        </div>
    )
}

export default LoginPage