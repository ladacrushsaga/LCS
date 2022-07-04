import React from "react";
import { Box, Image, Text, Container, VStack, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title } from "../../components/car";

const ArticleList = () => {
  return (
    <Layout title={`vaz 2104`}>
      <Container mb="10vh" maxW={"2xl"}>
        <Title> VAZ 2104</Title>
        <Box maxW="2xl">
          <Image src="/img/VAZ_2104.jpeg" borderRadius="xl" alt="VAZ 2104" />
        </Box>

        <VStack
          paddingTop="40px"
          spacing="2"
          maxW="2xl"
          alignItems="flex-start"
        >
          <Text as="p" fontSize="lg">
            The VAZ-2103 Zhiguli is a deluxe compact sedan car (small class,
            passenger car, model 3 in the Soviet classification), produced by
            VAZ, introduced in 1972 and produced until 1984. Better known by its
            export name Lada 1500 outside of its native Soviet Union and
            popularly nicknamed Тройка (Troika, 'three') in its domestic market.
            The car was developed jointly by VAZ and FIAT at the same time as
            Fiat 124 Special, and the two models had the same basis and
            influenced each other. 2103 was built under license and tailored for
            the Soviet and Eastern European market. The 2103 externally differs
            from its predecessor, the VAZ-2101 firstly by its four, that is,
            double sets of headlights, different grille and direction pointers,
            moldings on the sides of the body and larger taillights. Its main
            difference - the more powerful 75 hp (56 kW; 76 PS) 1,452 cc (88.6
            cu in) straight four petrol engine. In addition, this model is
            distinguished by the presence of vacuum brake booster as well as
            self-adjusting rear brakes and internally on new, Fiat 125 based,
            front panel along with its steering wheel and improved dashboard
            featuring wood imitation, tachometer, oil pressure gauge and front
            panel clock.
          </Text>

          <Text as="p" fontSize="lg">
            VAZ 2104 1.3 (64 Hp) has a urban fuel consumption of 10.1 l/100 km |
            23.3 mpg US | 28.0 mpg UK VAZ 2104 1.3 (64 Hp) accelerates from 0 to
            100 km/h in 18.5 sec. The maximum speed is 137 km/h | 85 mph.
          </Text>
        </VStack>
        <Divider p={3} />
      </Container>
    </Layout>
  );
};

export default ArticleList;
