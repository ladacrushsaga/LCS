import React from "react";
import { Box, Image, Text, Container, VStack, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title } from "../../components/car";

const ArticleList = () => {
  return (
    <Layout title={`vaz 2106`}>
      <Container mb="10vh" maxW={"2xl"}>
        <Title> VAZ 2106</Title>
        <Box maxW="2xl">
          <Image src="/img/VAZ_2106.jpg" borderRadius="xl" alt="VAZ_2106" />
        </Box>

        <VStack
          paddingTop="40px"
          spacing="2"
          maxW="2xl"
          alignItems="flex-start"
        >
          <Text as="p" fontSize="lg">
            Praesent ut tellus non felis semper blandit at quis tellus. Donec
            consequat urna eu nibh dignissim, nec tincidunt risus bibendum.
            Pellentesque ut dolor diam. Praesent tempor, lectus ac tempor
            rhoncus, lacus metus consequat mauris, ut feugiat mi ligula vitae
            lacus. Nam aliquet in risus id aliquam. Etiam eros risus,
            pellentesque eget est sed, condimentum elementum metus. Suspendisse
            sed eleifend diam. Phasellus blandit augue vitae dignissim iaculis.
            Vivamus nec ligula fermentum, rhoncus urna quis, pharetra odio.
            Donec eu aliquet eros, eget viverra sem. Pellentesque vitae neque
            lacus. Sed et volutpat lorem. Vivamus odio metus, pulvinar id
            condimentum non, tristique sit amet ligula
          </Text>

          <Text as="p" fontSize="lg">
            Praesent ut tellus non felis semper blandit at quis tellus. Donec
            consequat urna eu nibh dignissim, nec tincidunt risus bibendum.
            Pellentesque ut dolor diam. Praesent tempor, lectus ac tempor
            rhoncus, lacus metus consequat mauris, ut feugiat mi ligula vitae
            lacus. Nam aliquet in risus id aliquam. Etiam eros risus,
            pellentesque eget est sed, condimentum elementum metus. Suspendisse
            sed eleifend diam. Phasellus blandit augue vitae dignissim iaculis.
            Vivamus nec ligula fermentum, rhoncus urna quis, pharetra odio.
            Donec eu aliquet eros, eget viverra sem. Pellentesque vitae neque
            lacus. Sed et volutpat lorem. Vivamus odio metus, pulvinar id
            condimentum non, tristique sit amet ligula
          </Text>
        </VStack>
        <Divider p={3} />
      </Container>
    </Layout>
  );
};

export default ArticleList;
