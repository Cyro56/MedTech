import styles from "./Avaliacao.module.css";
import { useEffect, useState } from "react";
import axios from "axios"

function Avaliação() {
  const [name, setName] = useState([]);

  useEffect(() => {
   axios.get("http://localhost:5000/pessoa")    
      .then((res) => {
        setName(res.data[res.data.length -1].name)
      })
      .catch(err => {
        console.log(err)
      })
  })


  return (
   <div className={styles.Avaliacao}>
      <div>
       
        <h1 id="titulo">Avaliação de serviço</h1>
        <h2 id="subtitulo">
         Olá {name}
          , avalie sua experiência conosco
        </h2>
      </div>
      <form>
        <div className={styles.campo}>
          <label for="Profissional">
            <strong>Por qual profissional você foi atendido?</strong>
          </label>
          <select id="Profissional" required>
            <option selected disabled value="">
              Selecione
            </option>

            <option>Clínico geral</option>
            <option>Psicólogo</option>
            <option>Estudante de Medicina</option>
            <option>Estudante de Psicologia</option>
          </select>
        </div>

        <div className={styles.campo}>
          <label for="Q1">
            <strong>
              Com qual rapidez você consegue uma consulta em nosso aplicativo?
            </strong>
          </label>
          <select id="Q1" required>
            <option selected disabled value="">
              Selecione
            </option>

            <option>Muita Rapidez</option>
            <option>tempo aceitável</option>
            <option>um pouco lento</option>
            <option>extremamente demorado</option>
          </select>
        </div>

        <div className={styles.campo}>
          <label for="Q2">
            <strong>
              Qual sua possibilidade de realizar os tratamentos aconselhados
              pelo aplicativo?
            </strong>
          </label>
          <select id="Q2" required>
            <option selected disabled value="">
              Selecione
            </option>

            <option>
              Consigo realizar o aconselhado e adquirir os medicamentos
              necessários
            </option>
            <option>
              Consigo realizar parcialmente o aconselhado e adquirir os
              medicamentos necessários
            </option>
            <option>
              Consigo realizar o aconselhado e adquirir parcialmente os
              medicamentos necessários
            </option>
            <option>
              Não Consigo realizar o aconselhado e adquirir os medicamentos
              necessários
            </option>
          </select>
        </div>

        <div className={styles.campo}>
          <label for="Q3">
            <strong>Como foi o seu ultimo atendimento?</strong>
          </label>
          <select id="Q3" required>
            <option selected disabled value="">
              Selecione
            </option>

            <option>
              Foi excelente, consegui entender o aconselhado e consegui passar
              com detalhes minha situação
            </option>
            <option>
              Foi bom, consegui bons diagnósticos numa passagem rápida pelo
              profissional
            </option>
            <option>
              Poderia ter sido melhor, não consegui muita atenção do
              profissional e gostaria de uma segunda opnião
            </option>
            <option>Foi terrível, não confio nesse profissional</option>
          </select>
        </div>

        <div className={styles.campo}>
          <label for="Q4">
            <strong>
              Qual a possibilidade de você nos indicar para seus amigos?
            </strong>
          </label>
          <select id="Q4" required>
            <option selected disabled value="">
              Selecione
            </option>

            <option>Com certeza irei indicar</option>
            <option>Talvez eu indique</option>
            <option>É pouco provável que isso aconteça</option>
            <option>Nunca indicaria</option>
          </select>
        </div>
        <label>
          <strong>
            Deixe uma sugestão para a Ambev MedTech, gostaríamos de ouvir você e
            suas experiências por aqui:)
          </strong>
        </label>
        <textarea required></textarea>
        <button type="submit">Concluído</button>
      </form>
    </div>
  )
}

export default Avaliação;
