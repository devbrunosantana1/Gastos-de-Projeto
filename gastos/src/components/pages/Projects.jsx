import { Link } from "react-router-dom";
import { Message } from "../layout/Message";
import { useLocation } from "react-router-dom";

export function Projects() {

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }
    return(
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type="success" msg={message}/>}
        
            <Link to="/">retornar a página inicial</Link>
        </div>
    )
}