import React, { useState } from 'react'

const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 20 },
    { name: "Michael", age: 20 }
]
const UserSearch: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    const findUserFn = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser)

    }

    return (
        <div>
            <h2>UserSearch</h2>
            <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={findUserFn}>Find User</button>
            <div>
                {
                    user ? (
                        <div>
                            <h4> {user.name} {user.age} </h4>
                        </div>
                    ) : (
                        <h3>user not found !</h3>
                    )
                }
            </div>

        </div>

    )
}

export default UserSearch