import React from "react";
import { Box, Image, Text, Container, VStack, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title } from "../../components/car";

const ArticleList = () => {
  return (
    <Layout title={`vaz 2109`}>
      <Container mb="10vh" maxW={"2xl"}>
        <Title> VAZ 2109</Title>
        <Box maxW="2xl">
          <Image src="/img/VAZ_2109.jpeg" borderRadius="xl" alt="VAZ 2109" />
        </Box>

        <VStack
          paddingTop="40px"
          spacing="2"
          maxW="2xl"
          alignItems="flex-start"
        >
          <Text as="p" fontSize="lg">
            VAZ 2109 (popularly known as the “nine”) is a Soviet small class II
            front-drive vehicle in the hatchback body. The model was developed
            and mass-produced at the Volga Automobile Plant since 1987-2004.
            Since 2004 the car (VAZ-21093) was assembled from car kits at the
            Ukrainian enterprise “ZAZ” till the end of 2011. This vehicle is
            also a five-door version of VAZ-2108 in the Lada “Sputnik” models
            division. In the used car market it is still possible to buy this
            car today. The whole model range is Lada.
          </Text>

          <Text as="p" fontSize="lg">
            At the end of the 1980s, AVTOVAZ adopted a resolution to fill the
            empty niche of comfortable and versatile family models with the
            VAZ-2109 car. The fact that the Volga Automobile Plant had a debut
            domestically produced front-drive mass-produced car was a
            significant event not only for the Volga region, but also for the
            entire Soviet automotive industry. It is a little symbolic, but the
            start of the G8 production fell on a significant event, which was
            marked in the autumn of 1984 – the 60th anniversary of the
            automotive industry of the Union of Soviet Socialist Republics.
            After two years, the original assembly line of the Togliatti car
            factory produced a pilot batch of 159 models of the “nine”. Photo
            VAZ-2109 The new version of the chisel inherited all the technical
            innovations from the older model and was able to instantly gain the
            respect of car lovers. Among all the moments, the most important was
            the “rational” number of doors. However, despite this, a three-door
            variant was put into mass production. A logical question arises,
            why? Because in a country where personal transport was considered a
            luxury, and happy owners of cars felt the transport difficulties of
            their relatives and friends, the standard 3-volume version of the
            sedan met the needs of drivers to a greater extent. For a long time,
            all Soviet serial production vehicles were produced in such a
            bodywork. VAZ-2109 car The more productive versatile units, which
            were produced in small quantities, began to be sold only at the end
            of the 1960s, and they were considered to be in short supply. There
            was no word about other versions of the bodywork: the directors of
            automotive companies did not even risk conducting experiments,
            believing that these programs would not be welcomed “at the top”.
            But in the case of the G8, everything turned out in reverse order.
            In the late 1970s, the whole of Europe was literally overwhelmed
            with hatchback fashion. The managers of the Togliatti car factory,
            wishing to comply with modern trends, decided during the design of
            the new model series to make it, except for the standard sedan and
            fundamentally fresh for the Soviet industrial turnover 3- and 5-door
            hatchbacks. Photo of VAZ-2109 car The entry of the new car designed
            in accordance with the international standards should have
            strengthened VAZ’s export capacity. The Ministry of Automobile
            Industry has slightly cooled down the dust of the engineering staff
            from Togliatti, calculating the impossibility of financing the
            installation of all 3 versions for the conveyor assembly. In reality
            it was possible to release only one line of the factory conveyor for
            assembling 2 standardized modifications. In the role of those
            “lucky”, as it turned out, were hatchback, which had a lot of common
            bodywork elements. In the role of the basic version decided to
            choose a cheaper three-door car, and a couple of years later, it
            “came to the rescue” five-door. The version in the sedan body
            (VAZ-21099) was introduced into mass production only at the end of
            1990. Though this delay in some sense has benefited the enterprise
            as at occurrence of a sedan the sharp competition with the version
            hatchback that in any way was not included into plans of a
            management of the Volga automobile factory would be felt.{" "}
          </Text>
        </VStack>
        <Divider p={3} />
      </Container>
    </Layout>
  );
};

export default ArticleList;
