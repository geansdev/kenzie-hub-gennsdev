import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

  const [userTechs, setUserTechs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@kenziehub-User");
    const autoLogin = async () => {
      if (token) {
        try {
          Api.defaults.headers.Authorization = `Bearer ${token}`;
          const resp = await Api.get("profile");
          setUser(resp.data);
          setUserTechs(resp.data.techs);
        } catch (error) {
          localStorage.clear();
        }
      } else if (!token) {
        navigate("/");
      }
    };
    autoLogin();
  }, []);

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const resp = await Api.post("sessions", formData);
      toast.success("Conta logada com sucesso!");
      localStorage.setItem("@kenziehub-User", resp.data.token);
      setUser(resp.data.user);
      setUserTechs(resp.data.user.techs);
      navigate("/home");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      await Api.post("users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    window.localStorage.clear();
    navigate("/");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        userRegister,
        userLogin,
        userTechs,
        setUserTechs,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
