import React, { useState } from "react"


const GuesList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setGuests([...guests, name]);
        setName('')
    }

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {
                    guests.map(guest => (
                        <li key={guest}>{guest}</li>
                    ))
                }
            </ul>
            <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={onClick} > Add Guest</button>

        </div>
    );
}

export default GuesList
