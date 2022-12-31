import ReactDOM from 'react-dom/client';
import UserSearch from './refs/userSearch';

const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 20 },
    { name: "Michael", age: 20 }
]

const App: React.FC = () => {
    return (
        <div>
            <UserSearch />
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <App />
)