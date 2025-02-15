import { Route, Routes } from 'react-router-dom';
import './App.css'
import UsersContainer from './components/UsersContainer/UsersContainer';
import UserProfile from './components/UserProfile/UserProfile';
 
 
function App(){
 
  return(<>
 
  <Routes>
    <Route path='/' element={<UsersContainer /> } />
    <Route path='/:userid' element={<UserProfile/> } />
    <Route path='*' element={<UsersContainer/>} />
   </Routes>
  </>)
}
 
export default App;