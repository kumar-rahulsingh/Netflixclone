import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/registration/SignIn";


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/signin" element={ <SignIn/> } />
       </Routes>
      </Router>
    </div>
  )
}

export default App