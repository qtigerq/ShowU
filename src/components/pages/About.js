import styles from './About.module.css'
import { DiReact, DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiPhp, DiPostgresql, DiMysql, DiDocker, DiGithub, DiLinux, DiJava } from "react-icons/di";

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.leftcel}>
                <div className={styles.h1container}><h1>TM Sistemas</h1></div>
                <p>Desenvolvimento de sistemas e aplicativos Web utilizando metodologias ágeis, integração contínua e automação de testes. Foco em boas práticas como programação em par, CleanCode, Dojo e TDD. Publicação e manutenção de domínios Web, persistência em bancos relacionais e integração via API REST. Arquiteturas de Software em Camadas, MVC, Microserviços e Cliente-Servidor.</p><br />
                <p><strong>Tecnologias: </strong>React, JavaScript, Node, Jest, Express, Sequelize, HTML, CSS, PHP, Docker, Git, PostgreSQL e MySQL.</p>
            </div>
            <div className={styles.rightcel}>
                <ul>
                    <li><DiReact /></li>
                    <li><DiJavascript1 /></li>
                    <li><DiJava /></li>
                    <li><DiPhp /></li>
                    <li><DiDocker /></li>
                    <li><DiGithub /></li>
                    <li><DiCss3 /></li>
                    <li><DiHtml5 /></li>
                    <li><DiLinux /></li>
                    <li><DiPostgresql /></li>
                    <li><DiMysql /></li>
                    <li><DiNodejsSmall /></li>
                </ul>
            </div>
        </div>
    )
}

export default About