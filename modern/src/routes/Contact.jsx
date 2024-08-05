import {Center} from '@mantine/core'
function Contact(){

    return (<>
    <Center>
        <div className="contact">
        <h1 style={{marginBottom: '10px'}}> Find me on:</h1>
        <a href="mailto:mercedes.derek@gmail.com">Email</a>
        <br />
        <a href="https://www.linkedin.com/in/derek-mercedes">Linkedin</a>
        <br/>
        <a href="https://github.com/crossthebluesky">Github</a>
        <br/>
        <a href="https://dev.to/crossthebluesky">Dev.to</a>
      </div>
      </Center>
      </>
    )
}

export default Contact