
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import RegisterationForm from './components/RegisterationForm';
import UserData from './components/UserData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RegisterationForm />} />
        <Route path='/userdata' element={<UserData />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
