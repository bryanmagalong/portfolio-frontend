import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Section } from "../shared/Section";
import { Wrapper } from "../shared/Wrapper";
import WaveDividerTop from "../shared/WaveDividerTop";
import ProjectItem from "./ProjectItem";
import { fetchProjects } from "../../features/projects/projectActions";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.list);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Wrapper>
      <WaveDividerTop />
      <Section title="Projects" titleColor="#FFF">
        {projects.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </Section>
    </Wrapper>
  );
};

export default Projects;
