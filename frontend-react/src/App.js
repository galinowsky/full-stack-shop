import './App.css';
import { Navbar } from './components/Navbar/Navbar.js';
import Box from '@mui/material/Box';
import Home from './views/HomePage';
import { Routes, Route } from 'react-router-dom'
import { SignInPage } from './views/SignInPage.js'



function App() {
  return (

    <main className="App">
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignInPage/>}/>
        </Routes>

      </Box>
    </main>
  );
}

export default App;
