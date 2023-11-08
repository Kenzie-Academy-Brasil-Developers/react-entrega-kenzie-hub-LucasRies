import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({})

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const userLogout = () => {
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
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
                alert("E-mail ou Senha Incorretos")
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
            alert("Cadastro feito com sucesso")
        } catch (error) {
            console.log(error)
            if (error.response?.data.message === "Email already exists") {
                alert("Usuario ja cadastrado")
            }
        } finally {
            setLoading(false)
        }
    }


    return (
        <UserContext.Provider value={{ user, userLogin, userLogout, userRegister  }}>{children}</UserContext.Provider>
    )
}

export { UserContext, UserProvider }