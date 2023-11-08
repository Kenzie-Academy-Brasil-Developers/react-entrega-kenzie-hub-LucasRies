import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api.js"
import { toast } from "react-toastify";



const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const pathname = window.location.pathname
    
    
    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")

        const getUser = async () => {
            try {
                setLoading(true)
                const { data } = await api.get(`/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate(pathname)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getUser()
    }, [])

    const navigate = useNavigate()

    const userLogout = () => {
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
        toast.warn("Saindo...")
    }

    const userLogin = async (formData, setLoading) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", data.token)
            setUser(data.user)
            navigate("/dashbord")
        } catch (error) {
            console.log(error)
            if (error.response?.data.message === "Incorrect email / password combination") {
                toast.error("E-mail ou Senha Incorretos")
            }
        } finally {
            setLoading(false)
        }
    }

    const userRegister = async (payLoad, setLoading) => {
        try {
            setLoading(true)
            await api.post("/users", payLoad)
            navigate("/")
            toast.success("Cadastro feito com sucesso")
        } catch (error) {
            console.log(error)
            if (error.response?.data.message === "Email already exists") {
                toast.error("Usuario ja cadastrado")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <UserContext.Provider value={{
            loading, user, userLogin, userLogout, userRegister
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }