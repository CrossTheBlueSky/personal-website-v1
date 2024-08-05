import { Center, SimpleGrid, Title } from '@mantine/core'

function Projects(){

    return (
        <>
        <Center>
    <SimpleGrid m='50px' cols = {2} className="projects">
      <div className = "nearby-text">
        <h2>D&D Nearby</h2>
        <Title order={4} fs="italic">Because sometimes beyond is too far</Title>
        <p>An App I made to streamline the creation of characters for 5e Dungeons and Dragons.</p>
        <br/>
        <h5>Stack:</h5>
        <p>React, Redux, Node, Express, MongoDB, MantineUI</p>
      </div>
      <div className = "nearby-image">
        <img src = "src/assets/pixel-dragon.jfif" alt = "pixel dragon" width = "300"/>
      </div>
      <div className = "milestone-image">
        <img src= "src/assets/milestone-splash-1.png" alt = "milestone" width = "300"/>
      </div>
      <div className = "milestone-text">
        <h2>Milestone Fitness</h2>
        <Title order={4} fs="italic">Every step is a goal achieved.</Title>
        <p> A fitness app that utilizes machine learning to break down larger fitness goals into smaller steps.</p>
        <br/>
        <h5>Stack:</h5>
        <p>React, Python, SQLAlchemy, Flask, Bootstrap</p>
      </div>
      <div className = "ebb-text">
        <h2>Ebb - A Journaling App </h2>
        <Title order={4} fs="italic"> Find your flow </Title>
        <p> A journaling app that tracks and visualizes your mood patterns over time</p>
        <br/>
        <h5>Stack:</h5>
        <p>React, Python, SQLAlchemy, Flask, TailwindCSS, ChartJS</p>
      </div>
      <div className = "ebb-image">
        <img src = "src/assets/ebb-placeholder.jpeg" alt = "ebb" width = "300"/>

      </div>
    </SimpleGrid>
    </Center>
        </>
    )
}

export default Projects