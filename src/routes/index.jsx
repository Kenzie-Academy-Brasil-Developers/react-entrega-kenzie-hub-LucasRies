import { Route, Routes } from "react-router-dom"
import { Dashbord, ErrorPage, Login, Register } from "../pages"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export default () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<PrivateRoutes />}>
                <Route path="/dashbord" element={<Dashbord />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}