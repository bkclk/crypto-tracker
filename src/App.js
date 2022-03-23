import {GlobalStyle }from "./GlobalStyle"
import Main from "./components/Main"
import Coin  from "./components/Coin";
import {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>

        <Route path="/" exact element={<Main/>}/>
      <Route path="/:id" exact element={<Coin/>}/>
      
      
      
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
