import styles from './ProjectCard.module.css'

const ProjectCard = ({link, title, desc, techs, arch}) => {
    return (
        <a href={link}>
            <div className={styles.projectcard}>
                <h1>{title}</h1>
                <p><strong>Descrição: </strong>{desc}</p>
                <p><strong>Tecnologias utilizadas: </strong>{techs}</p>
                <p><strong>Arquitetura: </strong>{arch}</p>
                <p className={styles.end}><italic><center>
                    {(title !== 'ShowU') ? 'Clique para entrar no projeto' : 'Você já está neste projeto' }
                </center></italic></p>
                
            </div>
        </a>
    )
}

export default ProjectCard