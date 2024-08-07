import {SimpleGrid, Image} from '@mantine/core'


function Home(){

    return (
        <>
        <SimpleGrid mx='auto' cols={2}>
            <div>
                <h1>I&apos;m Derek Mercedes</h1>
                <p>I make things for computers</p>
            </div>
            <div>
            <Image  h='25rem'src='modern/public/derek-no-scanlines.jpg' alt="derek-mercedes" />
            </div>
        </SimpleGrid>
        </>
    )
}

export default Home