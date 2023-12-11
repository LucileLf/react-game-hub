import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null)

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }} templateColumns={{
    base: '1fr',
    lg: '200px 1fr'
  }}>

    <GridItem area='nav'>
      <Navbar/>
    </GridItem>

    <Show above="lg"> {/* render on lg and above */}
      <GridItem area='aside' paddingX={5}>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
                  {/* passed for formatting only */}
      </GridItem>
    </Show>

    <GridItem area='main'>
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) =>setSelectedPlatform(platform)}/>
                        {/* passed for formatting only */}
      <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
    </GridItem>

  </Grid>
}

export default App
