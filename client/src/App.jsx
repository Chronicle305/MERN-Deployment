

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import OnePet from './components/OnePet';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Form />} />
        <Route path='/pet/:_id' element={<OnePet />} />
        <Route path='/pet/edit/:_id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
