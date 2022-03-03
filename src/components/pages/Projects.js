import styles from './Projects.module.css'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h1>Projetos</h1>
            <p>Alguns dos meus projetos e módulos pessoais:</p>
            <div>
            <ul>
                <li>ISBNow</li>
                <li>Correio Interno</li>
                <li>Outro</li>
            </ul>
            </div>
        </div>
    )
}

export default Projects