import NextLink from 'next/link'
import { Heading, Box, Image, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box my="2vh" >
    <NextLink  href={`/ladainfo/ladas`}>
      <Link>Lada Models</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)



export const HomeLink = ({ children }) => (
  <Box m={5} fontSize="3xl" >
    <NextLink href="/">
      <Link>Home</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const LadaInfoLink = ({ children }) => (
  <Box m={5} fontSize="3xl" >
    <NextLink href="/aboutlada">
      <Link>About Lada</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)



export const LadaImage = ({ src, alt }) => (
  <Image borderRadius="lg" loading="lazy"  w="full"   src={src} alt={alt} mb={4} />
)


