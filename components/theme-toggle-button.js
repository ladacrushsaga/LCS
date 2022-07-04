import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    
     
        <IconButton
          rounded={"full"}
          aria-label="Toggle theme"        
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
     
    
  )
}

export default ThemeToggleButton
