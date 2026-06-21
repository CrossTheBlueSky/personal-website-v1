import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaVuejs, FaGithub, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiBootstrap, SiDocker, SiExpress } from 'react-icons/si';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Vue.js', icon: <FaVuejs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'Git', icon: <FaGithub /> },
  ];

  return (
    <Container className="py-2">
      <h1 className="text-center mb-5">Technical Skills</h1>
      <Row className="g-2">
        {skills.map((skill, index) => (
          <Col xs={4} sm={4} md={2} key={index} className="text-center">
            <div className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <p className="mt-2">{skill.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
