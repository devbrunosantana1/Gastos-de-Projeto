import { Message } from "../layout/Message";
import { useLocation } from "react-router-dom";
import { Container } from "../layout/Container";
import { Loading } from "../layout/Loading";
import { LinkButton } from "../layout/LinkButton";
import { ProjectCards } from "../project/ProjectCards";
import styles from "./Projects.module.css";
import { useState, useEffect } from "react";


export function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(true)

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {

        fetch("http://localhost:5000/projects",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(false)
        })
        .catch((err) => console.log(err));
    },[])
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                    <ProjectCards 
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    />
                ))}
                {removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    )
}