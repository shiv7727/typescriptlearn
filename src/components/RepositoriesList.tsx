import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import './App.css';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState<string>('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTerm(value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term)
        console.log(term);


    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='container'>
                <input type="text" name="repo" id="repo" value={term} onChange={handleChange} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList