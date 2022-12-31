import ReactDOM from 'react-dom/client';
import UserSearch from './refs/userSearch';



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