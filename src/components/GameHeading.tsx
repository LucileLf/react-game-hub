import React from 'react'
import { GameQuery } from '../App'
import { Heading } from '@chakra-ui/react'

interface GameHeadingProps {
  gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: GameHeadingProps) => {

  const heading: string = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginLeft={10} fontSize='5xl'>
      {heading}
    </Heading>
  )
}

export default GameHeading
