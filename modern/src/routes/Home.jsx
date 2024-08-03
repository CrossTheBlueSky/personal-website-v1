import {SimpleGrid, Image} from '@mantine/core'

function Home(){

    return (
        <>
        <SimpleGrid>
            <div>
                <h1>I'm Derek Mercedes</h1>
                <p>I make things for computers</p>
            </div>
            <Image src="../assets/derek.png" alt="derek-mercedes" />
        </SimpleGrid>
        </>
    )
}

export default Home