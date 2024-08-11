import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaVuejs, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
  const skills = [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vue.js', icon: <FaVuejs /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'Github', icon: <FaGithub /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },

  ];

  return (
    <Container className="py-2">
      <h1 className="text-center mb-5">Skills</h1>
      <Row className="g-2">
        {skills.map((skill, index) => (
          <Col xs={4} sm={4} md={2} key={index} className="text-center">
            <div className="skill-item">
              {/* Replace this with the actual icon component when you have the library imported */}
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