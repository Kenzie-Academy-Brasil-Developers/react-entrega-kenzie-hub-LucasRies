import { Route, Routes } from "react-router-dom"
import { Dashbord, ErrorPage, Login, Register } from "../pages"
import { PrivateRoutes } from "./privateRoutes"


export default () => {
    return <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
            <Route path="/dashbord" element={<Dashbord />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
    </Routes>
}