import React from "react";

import styles from "./project.module.css";
import projectCoverImg from "../asset/logo.jpg";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";

import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";
import { useSelector } from "react-redux";

const Projects = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    let projects = ProjectsData.DUMMY_PROJECTS;
    return (
        <React.Fragment>
            <div className={styles.projects}>
                <section className={styles.projectImg}>
                    <img src={projectCoverImg} alt="" />
                </section>
                <section className={styles.projectHeader}>
                    <h1><span style={{ color: nonThemeColor }}>The Cat </span><span style={{ color: uiColor }}>Meonk</span></h1>
                    <div>Chiko...</div>
                </section>
            </div>
            <ProgrammingSkills />
            <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>Blog</h1>
            <div className={styles.projectList}>
                {projects.map((item, index) => {
                    return <ProjectItem key={index} project={item} />
                })}
            </div>
            <div className={styles.moreProject}>
                <a href={`${SocialData.githubLink}?tab=repositories`}>
                    <Button className={styles.moreProjectBtn}>More</Button>
                </a>
            </div>
        </React.Fragment>
    )
};

export default Projects;