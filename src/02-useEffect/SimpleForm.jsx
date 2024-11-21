import { useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        userName: 'Goku',
        email: 'Goku69@gmail.com',
    });

    const { userName, email } = formState;

    const onInputChange = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value });
    };

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="userName"
                value={userName}
                onChange={onInputChange}
            />
            <div>{userName === 'Goku1' && <Message />}</div>
            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onInput={onInputChange}
            />
        </>
    );
};
