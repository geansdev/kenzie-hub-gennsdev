import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { UserContext } from "./userContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { userTechs, setUserTechs } = useContext(UserContext);
  const [openOrCloseModal, setOpenOrCloseModal] = useState(false);

  const addNewTech = async (data) => {
    const token = localStorage.getItem("@kenziehub-User");
    try {
      Api.defaults.headers.Authorization = `Bearer ${token}`;
      const resp = await Api.post("users/techs", data);
      setUserTechs((old) => [...old, resp.data]);
      toast.success("Tecnologia adicionada com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const deleteTechs = async (id) => {
    try {
      await Api.delete("users/techs/" + id);
      const techToDelete = userTechs.filter((tech) => tech.id !== id);
      setUserTechs(techToDelete);
      toast.success("Tecnologia deletada com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <TechContext.Provider
      value={{
        userTechs,
        openOrCloseModal,
        setOpenOrCloseModal,
        addNewTech,
        deleteTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
