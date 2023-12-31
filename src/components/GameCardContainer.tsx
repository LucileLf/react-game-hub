import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

//to avoid duplication of styling GameCard and GameCardSkeleton

interface GameCardContainerProps {
  children: ReactNode
}

const GameCardContainer = ({children} : GameCardContainerProps) => {
  return (
    <Box width="100%" borderRadius ={10} overflow="hidden">
      {children}
    </Box>
  )
}

export default GameCardContainer
