import './App.css';
import Home from './Home';
import Post from './post';
import Get from './Get';
import Put from './Put';
import Delete from './Delete';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/get" element={<Get/>}/>
      <Route path="/grocery" element={<Put/>}/>
      <Route path="/delete" element={<Delete/>}/>
    </Routes>

    </>
  );
}

export default App;