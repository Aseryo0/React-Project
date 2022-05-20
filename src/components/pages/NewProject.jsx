import styles from './Newproject.module.css'
import ProjectForm from '../Project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar seu serviço</p>
            <p>formulario</p>
            <ProjectForm btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject