import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/HomePg/Home";
import Admin from "./pages/AdminPg/Admin";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import Table from "./pages/AdminPg/Tablepg/Table";
import Detail from "./pages/DetailPg/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path="/admin/table" element={<Table />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
