import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navbar from './components/navbar/navbar.component';
import NotFound from './routes/notFound/notFound.component';
import CategoriesPreview from './routes/categories-preview/categories-preview.component';
import Authentication from './routes/authentication/authentication.component';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home/>} />
        <Route path='categories' element={<CategoriesPreview/>} />
        <Route path='auth' element={<Authentication />} />
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
