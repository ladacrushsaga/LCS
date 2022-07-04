import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Section from "./section";
import ThemeToggleButton from "./theme-toggle-button";


export default function ContactComponentP1() {
  const img = `/img/image${useColorModeValue("", "")}.png`;
  const logo = `/Logo/Logo${useColorModeValue("Light", "Dark")}.png`;
  return (
    <Container maxW="10xl" minH="100vh">
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex p={5} flex={0.45} align={"center"} justify={"center"}>
          <Stack spacing={10} w={"full"} maxW={"md"}>
            <Heading >
                <Section delay={0.2}>
                 
                <Image
              src={logo}
              width="500px"
              height="300px"
              alt="contact"
              
              objectFit="scale-down"
              placeholder="blur"
              blurDataURL={logo}
            />
          
              </Section>
              <br />{" "}

              <Section delay={0.3}><Text
                fontSize={{
                  base: "2xl",
                  sm: "2xl",
                  md: "2xl",
                  lg: "3xl",
                  xl: "4xl",
                }}
                color={useColorModeValue("red.900", "#fdde59")}
              
              >
                Made by 
              </Text></Section>{" "}
              <Section delay={0.4}><Text
                fontSize={{
                  base: "2xl",
                  sm: "2xl",
                  md: "sm",
                  lg: "lg",
                  xl: "xl",
                }}
                
               
              >
               Mate Ghvinjilia, Giorgi Asabashvili, Davit Amilakhvari, Beqa Imnaishvili
              </Text></Section>{" "}
            </Heading>
            <Section delay={0.5}><Text fontSize={{ base: "md", lg: "lg" }}>
            Nulla aliquet in elit quis gravida. Donec ultricies sem vel ipsum venenatis gravida. Ut dictum, est vel cursus iaculis, mauris magna facilisis metus, at rhoncus.
            </Text></Section>
            <Stack direction={{ base: "row", md: "row" }} spacing={4}>
            <Section delay={0.6}><Link href="/playlcs">
              
              <Button rounded={"full"} colorScheme="red">
                 Play LCS
                </Button>
            
            </Link></Section>
              <Section delay={0.7}><Link href="/aboutlada">
              
                <Button rounded={"full"} colorScheme="yellow">
                    About Lada
                  </Button>
              
              </Link></Section>
              <Section delay={0.7}> <ThemeToggleButton/></Section>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent="center" alignItems="center">
       
        <Section delay={0.9}> <Box
        
            overflow="hidden"
            
            h="90vh"
           
            w="65vw"
            borderRadius={10}
            m="1%"
            pos="relative"
          >
            <Image
              src={img}
              alt="contact"
              layout="fill"
              objectFit="scale-down"
              placeholder="blur"
              blurDataURL={img}
            />
          </Box></Section>
         
        </Flex>
        
      </Stack>
    </Container>
  );
}
