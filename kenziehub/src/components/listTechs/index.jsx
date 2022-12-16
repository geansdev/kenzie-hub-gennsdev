import React, { useContext } from "react";
import ImgTrash from "../../assets/trash.svg";
import { TechContext } from "../../contexts/techContext";
import { StylesListTechs } from "./style";

const ListTechs = () => {
  const { userTechs, deleteTechs } = useContext(TechContext);

  return (
    <StylesListTechs>
      {userTechs?.map((ele) => (
        <li key={ele.id}>
          <h2>{ele.title}</h2>
          <div className="divDeleteButton">
            <button type="button" onClick={() => deleteTechs(ele.id)}>
              <img src={ImgTrash} alt="Lixeira" />
            </button>
            <span>{ele.status}</span>
          </div>
        </li>
      ))}
    </StylesListTechs>
  );
};

export default ListTechs;
