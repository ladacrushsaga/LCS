import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';
import Section from './section';
function LadaStats() {
  return (
    <Container minH="30vh" py={5} maxW={'container.lg'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={5}>
        
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
        <Section delay={1}><Heading as={'h2'}>Lada Statistics</Heading></Section>
        </GridItem>
       <GridItem w="100%">
       <Section delay={1.1}><Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              1.75 Million
            </Text>
            <Box fontSize={'sm'}>
              Amount of sold VAZ 2107
            </Box>
          </Flex></Section>
        </GridItem>
       <GridItem w="100%">
       <Section delay={1.2}><Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              1.67 Million
            </Text>
            <Box fontSize={'sm'}>
            Amount of sold VAZ 2106
            </Box>
          </Flex></Section>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default LadaStats;