import React from "react";
import { Box, Image, Text, Container, VStack, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title } from "../../components/car";

const ArticleList = () => {
  return (
    <Layout title={`vaz 2105`}>
      <Container mb="10vh" maxW={"2xl"}>
        <Title> VAZ 2105</Title>
        <Box maxW="2xl">
          <Image src="/img/VAZ_2105.jpeg" borderRadius="xl" alt="VAZ 2105" />
        </Box>

        <VStack
          paddingTop="40px"
          spacing="2"
          maxW="2xl"
          alignItems="flex-start"
        >
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor metus sit amet egestas interdum. Morbi et ultricies mauris.
            Praesent elementum, quam in volutpat consequat, orci massa cursus
            massa, sit amet ultricies neque nunc quis libero. Sed id volutpat
            elit, ac laoreet lectus. Etiam aliquam elit vitae pretium commodo.
            Aenean malesuada tempus turpis, ut ullamcorper ipsum varius sit
            amet. Phasellus tempus mollis diam eu porta. Duis convallis eros
            arcu, ut molestie nisl sodales vitae. Fusce in nulla nunc. Integer
            placerat sodales metus quis vulputate. Praesent ac odio ac ipsum
            faucibus hendrerit. Morbi sit amet ipsum porttitor, sodales arcu
            non, pharetra urna. Aenean eleifend nibh a lorem elementum, sit amet
            vestibulum erat malesuada. Vivamus porta vestibulum sapien vel
            posuere. Aenean ornare nisl in consectetur mollis. Donec posuere
            nunc sit amet consequat accumsan.
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
