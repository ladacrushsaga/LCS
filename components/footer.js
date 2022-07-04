import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';
import Logo from './logo';




const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue('#fdde59', '#1b1b1b')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={8}>
          <Stack px={10} align={'flex-start'}>
            <ListHeader>Navigation</ListHeader>
            <Link href={'/'}>Home</Link>
            <Link href={'/playlcs'}>Lada Crush Saga</Link>
            <Link href={'/aboutlada'}>About Lada</Link>
            <Link href={'/ladainfo/ladas'}>VAZ 21 cars</Link>
          </Stack>
          
          <Stack px={10} align={'flex-end'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo/>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Lada Crush Saga. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}