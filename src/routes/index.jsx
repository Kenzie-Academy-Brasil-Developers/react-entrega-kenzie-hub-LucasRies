import { Route, Routes } from "react-router-dom"
import { Dashbord, ErrorPage, Login, Register } from "../pages"


export default () => {
    return <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
}