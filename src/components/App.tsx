import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';
import './App.css'

const App = () => {
    return (
        <Provider store={store}>
            <div >
                <h1 className='container'> Search for a Package</h1>
                <RepositoriesList />
            </div>
        </Provider>
    )
}

export default App