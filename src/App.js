import { Error, Homepage, Capsules, Cores, Crew } from "./pages";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/*" element={<Error />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/cores" element={<Cores />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
