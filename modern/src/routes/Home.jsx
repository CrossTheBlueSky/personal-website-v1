import {SimpleGrid, Image, Center} from '@mantine/core'


function Home(){

    return (
        <>
        <SimpleGrid mx='50px' cols={2}>
            <div>
                <h1>I&apos;m Derek Mercedes</h1>
                <p>I make things for computers</p>
            </div>
            <div>
            <Image  h='400px'src='src/assets/derek-no-scanlines.jpg' alt="derek-mercedes" />
            </div>
        </SimpleGrid>
        </>
    )
}

export default Home