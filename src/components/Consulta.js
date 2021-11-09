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
          <br />

          <input
            type="datetime-local"
            name="data"
            id="datetime-local"
            required
          />
        </div>

        <label for="Especialista">
          <strong>Selecione seu especialista</strong>
        </label>
        <br />

        <select id="Especialista" required>
          <option selected disabled value="">
            Selecione
          </option>
          <option>Clínico geral</option>
          <option>Psicólogo</option>
          <option>Estudante de Medicina</option>
          <option>Estudante de Psicologia</option>
        </select>
        <div>
          <label>
            <strong>Você tem sentido algum desses sintomas de Covid-19?</strong>
          </label>
          <br></br>
          <ul>
            <li>
              <input type="checkbox" id="doença1" name="doença1" value="HTML" />
              <label for="doença1">Febre</label>
            </li>
            <li>
              <input type="checkbox" id="doença2" name="doença2" value="HTML" />
              <label for="doença2">Tosse seca</label>
            </li>
            <li>
              <input type="checkbox" id="doença3" name="doença3" value="HTML" />
              <label for="doença3">Cansaço</label>
            </li>
            <li>
              <input type="checkbox" id="doença4" name="doença4" value="HTML" />
              <label for="doença4">Dor no peito</label>
            </li>
            <li>
              <input type="checkbox" id="doença5" name="doença5" value="HTML" />
              <label for="doença5">Dificuldade de Respirar</label>
            </li>
            <li>
              <input
                selected
                type="checkbox"
                id="doença6"
                name="doença6"
                value="HTML"
              />
              <label for="doença6">Não</label>
            </li>
          </ul>
        </div>

        <label>
          <strong>Explique com poucas palavras oque você está sentindo</strong>
          <textarea required></textarea>
        </label>
        <button  type="submit" >
          Solicitar
        </button>
      </form>
    </div>
  );
}

export default Consulta;
