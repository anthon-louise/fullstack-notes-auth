import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { registerUser } from "../services/userService";

function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSave = async () => {
        const data = await registerUser({ username, password })
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
            <h2>Register</h2>
            <Input label='Username' value={username} onChange={setUsername} />
            <br />
            <Input label='Password' value={password} onChange={setPassword} />
            <br />
            <Button label='Submit' type='submit' onClick={handleSave} />
        </div>
    )
}

export default RegisterPage