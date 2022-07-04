import React from "react";
import { Box, Image, Text, Container, VStack, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title } from "../../components/car";

const ArticleList = () => {
  return (
    <Layout title={`vaz 2103`}>
      <Container mb="10vh" maxW={"2xl"}>
        <Title> VAZ 2103</Title>
        <Box maxW="2xl">
          <Image src="/img/VAZ_2103.jpeg" borderRadius="xl" alt="VAZ 2103" />
        </Box>

        <VStack
          paddingTop="40px"
          spacing="2"
          maxW="2xl"
          alignItems="flex-start"
        >
          <Text as="p" fontSize="lg">
            The VAZ-2103 Zhiguli is a deluxe compact sedan car (small class,
            passenger car, model 3 in Soviet classification), produced by VAZ,
            introduced in 1972 and produced until 1984. Better known by its
            famous export name Lada 1500 outside of its native Soviet union and
            popularly nicknamed Тройка (Troika, 'three') in domestic market. The
            car was developed jointly by VAZ and FIAT at the same time as Fiat
            124 Special, and the two models had the same basis and influenced
            each other. 2103 was built under license and tailored for the Soviet
            and Eastern European market. vaz2103 2 The 2103 externally differs
            from its predecessor, the VAZ-2101 firstly by its four, that is,
            double sets of headlights, different grille and direction pointers,
            moldings on the sides of the body and larger taillights. Its main
            difference - the more powerful 75 hp (56 kW; 76 PS) 1,452 cc (88.6
            cu in) straight four petrol engine. In addition, this model is
            distinguished by the presence of vacuum brake booster as well as
            self-adjusting rear brakes and internally on new, Fiat 125 based,
            front panel along with its steering wheel and improved dashboard
            featuring wood imitation, tachometer, oil pressure gauge and front
            panel clock. vaz2103 5 Known as the Zhiguli within the Soviet Union,
            the main differences between the VAZ-2103 and the Fiat 124 Special
            are the use of thicker-gauge steel for the bodyshell (so the 2103
            weighed 1,030 kg (2,270 lb), the Fiat 105 kg (231 lb) less), an
            overhead camshaft engine (in place of the original Fiat OHV unit),
            and the use of aluminium drum brakes on the rear wheels in place of
            disc brakes. The car featured a starting handle for cranking the
            engine manually should the battery go flat in Siberian winter
            conditions, auxiliary fuel pump as well as improved soundproofing.
            It was later joined by the 1,198 cc (73.1 cu in)-powered 21035 and
            1,294 cc (79.0 cu in) (VAZ 21011-engined) 21033. VAZ were forbidden
            from selling the car in competing markets alongside the Fiat 124;
            however exports to Western European nations began in 1974 when the
            124 was discontinued in favour of Fiat's newer 131 Mirafiori model.
            The VAZ-2103 was sold in export markets from mid-1970s to early
            1980. In the United Kingdom, it was sold from May 1976 until May
            1979 and it was the second Lada car to be sold in this market.
            Although starting to be slowly replaced with its successor, the
            VAZ-2106 already from 1976, it was still produced as far as 1984 and
            was the first VAZ model to be discontinued, despite not being the
            oldest one. It was mainly due to complexivity of production and
            expense of its chrome lined elements which were severely reduced in
            VAZ-2106.
          </Text>

          <Text as="p" fontSize="lg">
            Reviewers from the French L'Auto-Journal called it "an extremely
            serious working instrument, able to circulate in the worst
            conditions" and "a well-made car capable of being serviced anywhere,
            even by its owner". VAZ-2103 (1972-1984) — 4-door saloon was
            equipped with 1,452 cc (88.6 cu in) straight four. Compared to the
            Fiat 124 Special modifications were done to suspension, carburetor
            and some other parts in order to satisfy the wide range of Russian
            climate conditions. All these models had an adapted to the local
            roads and still soft enough suspension, that provided very
            comfortable ride even on tough gravel roads. The Lada became a real
            hit in Soviet Union. The "Zhiguli" cars opened a new epoch in
            Russian motorization. More expensive VAZ-2103 was considered a
            prestigious model, and was very popular among Soviet white-collar
            workers. Unfortunately the Tolyatti plant where Lada were produced
            could not keep up with the consumer demand and people had to wait
            for years to get chances to buy a car. The 21032 was the right-hand
            drive version.
          </Text>
        </VStack>
        <Divider p={3} />
      </Container>
    </Layout>
  );
};

export default ArticleList;
