import React from "react";
import { Box, Image, Text, Container, VStack, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title } from "../../components/car";

const ArticleList = () => {
  return (
    <Layout title={`vaz 2102`}>
      <Container mb="10vh" maxW={"2xl"}>
        <Title> VAZ 2102</Title>
        <Box maxW="2xl">
          <Image src="/img/VAZ_2102.jpeg" borderRadius="xl" alt="VAZ 2102" />
        </Box>

        <VStack
          paddingTop="40px"
          spacing="2"
          maxW="2xl"
          alignItems="flex-start"
        >
          <Text as="p" fontSize="lg">
            VAZ-2102 is a station wagon version of VAZ-2101. It was produced
            between 1971 and 1983 (1986 including the various production
            versions). It was eventually replaced by VAZ-2104. Like VAZ-2101
            before it, VAZ-2102 had several production versions:
          </Text>

          <Text as="p" fontSize="lg">
            VAZ 2102 is one of the 16 VAZ models available on the market. It
            comes in 2 generations and in 2 modifications in total. The model
            has been in production since 1971. VAZ 2102 comes in Combi coupe
            types and can be suited with Petrol (Gasoline) engine types.
            Technical specifications, transmission details, body dimensions and
            tyre sizes of each make can be found here. The visual
            characteristics of all the generations can be viewed in the photo
            galeries that are available.
          </Text>
        </VStack>
        <Divider p={3} />
      </Container>
    </Layout>
  );
};

export default ArticleList;
