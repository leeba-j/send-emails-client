import './App.css';
import Form from './components/form/form';
import NavBar from './components/navBar/navBar';
import Users from './components/allUsers/allUsers'
import NoPage from './components/noPage/noPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
     <NavBar></NavBar>
     <Routes>
     <Route path="home" element={<Form />} />
     <Route path="users" element={<Users />} />
     <Route path="/" element={<Form />} />
     <Route path="*" element={<NoPage />} />


     </Routes>
    </BrowserRouter>
     
  );
}

export default App;
