import styles from './Projects.module.css'
import ProjectCard from '../projects/ProjectCard'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h1>Projetos</h1>
            <p>Alguns dos meus projetos e módulos pessoais:</p>
            <div>
            <ul>
                <li>
                    <ProjectCard 
                        link ='http://isbnowf.tiagomelo.kinghost.net/' 
                        title='ISBNow' 
                        desc='Módulo de cadastro de livros utilizando autopreenchimento de dados via código ISBN com integração entre APIs externas.' 
                        techs='ReactJS, JavaScript, Node, Sequelize, Express e MySQL' 
                        arch='Backend com arquitetura MVC e persistência em banco de dados relacional. Frontend projetado em React totalmente componentizado.'
                    />
                </li>                
                <li>
                    <ProjectCard
                        title = 'InMail'
                        desc = 'Microserviço para comunicação interna via mensagens privadas e/ou públicas com gerenciamento de correspondências eletrônicas semelhante a um servidor de Email.'
                        techs = 'PHP e MySQL'
                        arch = ''
                    />
                </li>
                <li>
                    <ProjectCard
                        title = 'ShowU'
                        desc = 'Sistema desenvolvido para um portifólio minimalista com página para amostra de projetos, contatos, página sobre o desenvolvedor e alguns efeitos visuais sutis.'
                        techs = 'ReactJS, CSS e HTML.'
                        arch = 'Arquitetura componentizada do ReactJS estruturada em Layouts, Pages e Models.'
                    />
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Projects