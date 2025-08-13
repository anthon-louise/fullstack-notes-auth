import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSave = () => {

    }

    return (
        <div>
            <Input label='Username' value={username} onChange={setUsername} />
            <br />
            <Input label='Password' value={password} onChange={setPassword} />
            <br />
            <Button label='Submit' type='submit' onClick={handleSave}/>
        </div>
    )
}

export default RegisterPage