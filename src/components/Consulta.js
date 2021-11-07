import styles from "./Consulta.module.css"
function Consulta() {
  return (
    <div>
      <form className={styles.Consulta}>
        <div>
          <h1 className={styles.titulo}>Solicitação de Consultas</h1>

          <label for="data">
            <strong>data e hora de sua consulta</strong>
          </label>

          <input
            type="datetime-local"
            name="data"
            id="datetime-local"
            required
          />
        </div>

        <div className={styles.Especialista}>
          <label for="Especialista">
            <strong>Selecione seu especialista</strong>
          </label>
          <select id="Especialista" required>
            <option selected disabled value="">
              Selecione
            </option>
            <option>Clínico geral</option>
            <option>Psicólogo</option>
            <option>Estudante de Medicina</option>
            <option>Estudante de Psicologia</option>
          </select>
        </div>
        <div>
          <label>
            <strong>Você tem sentido algum desses sintomas de Covid-19?</strong>
          </label>
          <br></br>
          <input type="checkbox" id="doença1" name="doença1" value="HTML" />
          <label for="doença1">Febre</label>
          <input type="checkbox" id="doença2" name="doença2" value="HTML" />
          <label for="doença2">Tosse seca</label>
          <input type="checkbox" id="doença3" name="doença3" value="HTML" />
          <label for="doença3">Cansaço</label>
          <input type="checkbox" id="doença4" name="doença4" value="HTML" />
          <label for="doença4">Dor no peito</label>
          <input type="checkbox" id="doença5" name="doença5" value="HTML" />
          <label for="doença5">Dificuldade de Respirar</label>
          <input
            selected
            type="checkbox"
            id="doença6"
            name="doença6"
            value="HTML"
          />
          <label for="doença6">Não</label>
        </div>
        <div>
          <label>
            <strong>Conte mais sobre oque você espera com a consulta</strong>
            <textarea
              row="6"
              width="260px"
              id="sobre"
              name="sobre"
              required
            ></textarea>
          </label>
        </div>
        <button class="botao" type="submit">
          Solicitar
        </button>
      </form>
    </div>
  );
}

export default Consulta;
