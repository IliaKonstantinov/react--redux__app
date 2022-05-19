import LoginPage  from "./components/login/LoginPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ContentPage from "./components/content/ContentPage";

const App = () =>{
  return(
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/users" element={<ContentPage/>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;