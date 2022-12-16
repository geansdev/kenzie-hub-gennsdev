import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/techContext";
import { StyledButton } from "../../button/style";
import { StyledForm } from "../../form";
import InputForm from "../../input";
import { StyledInput } from "../../input/style";
import { StylesModalAdd } from "./style";

const ModalAdd = () => {
  const { setOpenOrCloseModal, addNewTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      status: "Iniciante",
    },
  });
  return (
    <StylesModalAdd>
      <div>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button
            className="btnCloseModal"
            type="button"
            onClick={() => setOpenOrCloseModal(false)}
          >
            X
          </button>
        </div>
        <StyledForm onSubmit={handleSubmit(addNewTech)}>
          <InputForm
            type="text"
            id="inputNewTech"
            placeholder="Adicione uma nova Tecnologia"
            label="Nome"
            register={register("title")}
          />
          <StyledInput>
            <label htmlFor="selectStatus">Selecionar status</label>
            <select
              name="selectStatus"
              id="selectStatus"
              {...register("status")}
            >
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </StyledInput>
          <StyledButton type="submit">Cadastrar Tecnologia</StyledButton>
        </StyledForm>
      </div>
    </StylesModalAdd>
  );
};

export default ModalAdd;
