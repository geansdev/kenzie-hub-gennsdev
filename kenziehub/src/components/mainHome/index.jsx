import { useContext } from "react";
import { TechContext } from "../../contexts/techContext";
import ListTechs from "../listTechs";
import ModalAdd from "../modals/add";
import { StyledMain } from "./style";

const MainHome = () => {
  const { openOrCloseModal, setOpenOrCloseModal } = useContext(TechContext);
  return (
    <StyledMain>
      <div>
        <div className="headerListTech">
          <span>Tecnologias</span>
          <button
            className="buttonOpenOrCloseModal"
            onClick={() => setOpenOrCloseModal(true)}
          >
            +
          </button>
        </div>
        <ListTechs />
      </div>
      {openOrCloseModal && <ModalAdd />}
    </StyledMain>
  );
};

export default MainHome;
