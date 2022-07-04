import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Text,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

import Section from '../components/section'
import Image from 'next/image'
import React from 'react';
import { HomeLink } from '../components/car'
import LadaPic from "../public/img/ladapic.png"
import LadaStats from '../components/ladastatistics';
import Link from 'next/link';


function AboutUs() {



  return (


    <Layout title="About Lada">
      {
        <Container maxW="10xl" overflow="hidden" padding={0}>
          
     <HomeLink>
        About Lada
     </HomeLink>


          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }} pos="relative" minH={{ base: "50vh", sm: "50vh", md: "50vh", lg: "50vh", xl: "55vh" }} w="100%" spacingX="5vw" spacingY="5vh"
            px={{ base: "5%", sm: "5%", md: "5%", lg: "10%", xl: "10%" }} 
          >
             <Section delay={0.3} >

<Box w="100%"    pos="relative" borderRadius={10} overflow="hidden"  >


  <Image

    src={LadaPic}
    alt="hello"
    layout="responsive"
    objectFit="scale-down"
    placeholder="blur"
    quality="25"
    priority />

</Box>
</Section>

            <Flex p={5}  justify={"center"}>
              <Stack spacing={7} w={"full"} maxW={"md"}>
              <Section delay={0.5}><Heading>

                  <Section delay={0.4}> <Text
                    fontSize={{
                      base: "2xl",
                      sm: "3xl",
                      md: "2xl",
                      lg: "3xl",
                      xl: "4xl",
                    }}
                    
                    as={"span"}
                  >
                    About Lada 
                  </Text> </Section>{" "}
                </Heading></Section>
                <Section delay={0.7}><Text fontSize={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "lg" }}>
                  
                Lada (Лада, Russian pronunciation: [ˈladə]), marketed as LADA, is a brand of cars manufactured by AvtoVAZ (originally VAZ), a Russian state-owned company. 

The first cars manufactured by AvtoVAZ were produced with technical assistance from Fiat and marketed under the Zhiguli designation. The Lada brand appeared in 1973, initially being overseas-focused before becoming AvtoVAZ's main brand for all markets in the 1990s. Renault took control of the brand in 2016. Lada was re-acquired by the Russian government in 2022.
</Text></Section> 
<Section delay={0.9}><Link href="/ladainfo/ladas"><Button rounded={"full"} colorScheme="red">
                Lada Models
                </Button></Link></Section>

              </Stack>
            </Flex>



           

          </SimpleGrid>
          
<LadaStats/>
        

         

        </Container>

      }

    </Layout>

  )
}






export default AboutUs;
