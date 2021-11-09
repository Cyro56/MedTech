import styles from "./Cadastro.module.css";
function Cadastro() {
  return (
    <div className={styles.Cadastro}>
      <div>
        <h1 id="titulo">MedTech</h1>
        <h2 id="subtitulo">Cadastro de usuários</h2>
      </div>
      <form>
        <fieldset className={styles.Campo}>
          <div>
            <label for="nome">
              <strong>Nome</strong>
            </label>
            <br />
            <input type="text" name="nome" id="nome" required />
          </div>

          <div className={styles.campo}>
            <label for="sobrenome">
              <strong>Sobrenome</strong>
            </label>
            <input type="text" name="sobrenome" id="sobrenome" required />
          </div>
        </fieldset>

        <div className={styles.Campo}>
          <label for="email">
            <strong>Email</strong>
          </label>
          <br />
          <input type="email" name="email" id="email" />
        </div>
        <div className={styles.Campo}>
          <label for="pass">Senha (mínimo 8 dígitos):</label>
          <br />
          <input
            type="password"
            id="pass"
            name="password"
            minlength="8"
            required
          />
        </div>
        <div className={styles.Campo}>
          <label for="Você é profissional ou paciente?">
            <strong>Você é profissional ou paciente?</strong>
          </label>
          <br />
          <select id="Você é profissional ou paciente?">
            <option selected disabled value="">
              Selecione
            </option>
            <option>Paciente</option>
            <option>Clínico geral</option>
            <option>Psicólogo</option>
            <option>Estudante de Medicina</option>
            <option>Estudante de Psicologia</option>
          </select>
        </div>

        <fieldset className={styles.Campo}>
          <div id="check">
            <label>
              <strong>
                Se você for um paciente selecione suas doenças ou problemas
                crônicos
              </strong>
            </label>
            <br></br>
            <ul>
              <li>
                <input
                  type="checkbox"
                  id="doença1"
                  name="doença1"
                  value="HTML"
                />
                <label for="doença1">Problemas de pressão</label>
              </li>

              <li>
                <input
                  type="checkbox"
                  id="doença2"
                  name="doença2"
                  value="HTML"
                />
                <label for="doença2">Problemas cardiovasculares</label>
              </li>

              <li>
                <input
                  type="checkbox"
                  id="doença3"
                  name="doença3"
                  value="HTML"
                />
                <label for="doença3">
                  Problemas Respiratórios ou pulmonares
                </label>
              </li>

              <li>
                <input
                  type="checkbox"
                  id="doença4"
                  name="doença4"
                  value="HTML"
                />
                <label for="doença4">Febres recorrentes</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="doença5"
                  name="doença5"
                  value="HTML"
                />
                <label for="doença5">Outros</label>
              </li>
              <li>
                <input
                  selected
                  type="checkbox"
                  id="doença6"
                  name="doença6"
                  value="HTML"
                />
                <label for="doença6">Sem problemas crônicos</label>
              </li>
            </ul>
            <button className={styles.Campo} type="submit">
              Concluído
            </button>
          </div>         
        </fieldset>
      </form>
    </div>
  );
}

export default Cadastro;
