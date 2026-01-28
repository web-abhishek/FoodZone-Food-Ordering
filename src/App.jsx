import { Provider } from 'react-redux';
import './App.css'
import Navbar from './components/Navbar'
// import Searchbar from './components/Searchbar'
import { Outlet } from 'react-router-dom'
import AppStore from './utils/AppStore';

function App() {

  return (
    <Provider store={AppStore}>
     <Navbar/>
     <Outlet/>
    </Provider>
  )
}


export default App;
