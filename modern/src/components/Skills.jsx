import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
  const skills = [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'SQL', icon: <FaDatabase /> },

  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Skills</h1>
      <Row className="g-4">
        {skills.map((skill, index) => (
          <Col xs={6} sm={4} md={3} key={index} className="text-center">
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