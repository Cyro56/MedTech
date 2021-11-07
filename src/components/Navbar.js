import {Link} from "react-router-dom"
function Navbar(){
    return(
        <><li>
            <Link to="/">Home</Link>
        </li><li>
                <Link to="/Consulta">Consulta</Link>
            </li><li>
                <Link to="/Avaliação">Avaliação</Link>
            </li></>
      
    )
}
export default Navbar