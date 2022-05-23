import { useNavigate } from 'react-router-dom'
import styles from './Newproject.module.css'
import ProjectForm from '../Project/ProjectForm'

function NewProject() {
    const navigate = useNavigate()
    function createPost(Project) {
        //inicializar custos e serviços
        Project.cost = 0
        Project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(Project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //reditect
                navigate('projects', { message: 'Projeto criado com sucesso!' })
            })
            .catch(err => console.log(err))
    }
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar seu serviço</p>
            <p>formulario</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}

export default NewProject