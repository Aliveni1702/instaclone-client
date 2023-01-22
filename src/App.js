import {React} from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Post from './components/postview/post';
import Form from './components/form/form';
import LandingPage from './components/landingpage/landing';


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/form' element={<Form/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
