import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container my="25vh">
      <Heading textAlign="center"  as="h1">ვერ მოიძებნა</Heading>
      <Text textAlign="center" >გვერდი რომელსაც ეძებთ არ არსებობს</Text>
      <Divider my={5} />

      <Box my={5} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">მთავარ გვერძე დაბრუნება</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
