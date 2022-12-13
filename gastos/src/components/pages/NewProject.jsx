import  { useNavigate }  from 'react-router-dom'
import { ProjectForm } from "../project/ProjectForm"
import styles from "./NewProject.module.css"

export function NewProject() {

    const history = useNavigate()

    function createPost(project) {

        //instialize gastos and services
        project.gastos = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            //redirect
            history("/projects")
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={ styles.newproject_container }>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}