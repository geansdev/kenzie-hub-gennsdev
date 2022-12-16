import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/techContext";
import { StyledForm } from "../../form";
import InputForm from "../../input";

const ModalAdd = () => {
  const { setOpenOrCloseModal, addNewTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      status: "Iniciante",
    },
  });
  return (
    <section>
      <div>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button type="button" onClick={() => setOpenOrCloseModal(false)}>
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
          <fieldset>
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
          </fieldset>
          <button type="submit">Cadastrar Tecnologia</button>
        </StyledForm>
      </div>
    </section>
  );
};

export default ModalAdd;
