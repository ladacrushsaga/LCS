import React from "react";
import { Box, Image, Text, Container, VStack, Divider } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title } from "../../components/car";

const ArticleList = () => {
  return (
    <Layout title={`vaz 2107`}>
      <Container mb="10vh" maxW={"2xl"}>
        <Title> VAZ 2107</Title>
        <Box maxW="2xl">
          <Image src="/img/VAZ_2107.jpeg" borderRadius="xl" alt="VAZ 2107" />
        </Box>

        <VStack
          paddingTop="40px"
          spacing="2"
          maxW="2xl"
          alignItems="flex-start"
        >
          <Text as="p" fontSize="lg">
            The Lada Riva is a medium-sized family car from Russian manufacturer
            AvtoVAZ, introduced in 1980 and sold under the Lada brand in saloon
            and estate car forms. It was marketed as the Lada Nova in some (but
            not all) European countries, and as the Lada 1500 and Lada Signet in
            Canada. In Brazil it was sold as the Lada Laika. Although introduced
            in 1980, the Riva's origins are older: it is a restyled version of
            the Fiat 124-based Lada Type VAZ-2101 / "Zhiguli" saloon, which was
            introduced in 1970. The Riva itself is officially designated as
            VAZ-2105 (base saloon), VAZ-2104 (estate), and VAZ-2107 for the
            deluxe saloon with a large chrome grille, sometimes known (in
            Eastern Bloc countries) as the ВАЗ-2105 (VAZ-2105), ВАЗ-2107
            (VAZ-2107), 'Pyatyorka' ('The Five') or Semyorka ('The Seven'). In
            Russia, VAZ-2105, VAZ-2104 and VAZ-2107 are considered to be
            different cars rather than variants. Nonetheless all of them are
            unofficially included in a single 'Klassika' ('Classic') family
            along with older models such as the VAZ-2101 'Kopeika'.
            Mechanically, the car is virtually identical to the first generation
            VAZ-2101 model, featuring the Fiat-derived engines and
            transmissions, coil spring suspension all round and aluminium drum
            brakes on the rear wheels. The major mechanical changes came in the
            1990s when single point fuel injection and catalytic converters were
            specified in an attempt to keep up with emissions legislation.
          </Text>

          <Text as="p" fontSize="lg">
            Tightening safety and emissions legislation led to the Riva being
            withdrawn from most Western European markets by 1997, although it is
            still in production at the AvtoVAZ factory in Russia. In 2005,
            production of the estate model was taken over by Izh, before
            assembly was transferred to the Bogdan Group's LuAZ plant. The 2107
            model is still in production, not only at AutoVAZ but also at the
            ZAZ factory in Ukraine, and at Suzuki's factory in Egypt. In the
            United Kingdom, the Lada Riva was one of the most popular budget
            offerings on sale. Its spartan interiors, dated styling and outdated
            mechanicals meant that it was never actually aimed at buyers of
            market leaders' similar-sized products such as the Ford Sierra,
            Vauxhall Cavalier and Austin Montego. It was a competitor for fellow
            East European and Far Eastern cars from makes like Skoda, Yugo, FSO
            and Hyundai. Sales were initially very strong, with Lada passing the
            20,000 mark in Britain's car sales charts for the first time in
            1987. The Riva was still selling well in the early 1990s, but a lack
            of changes at a time when the rest of the competition was coming up
            with more modern designs counted against the Riva's fortunes and its
            sales fell. Combined with the need to adapt the car to stricter
            emissions regulations, this led to it being withdrawn from Britain
            (along with the rest of the Lada range) in 1997.
          </Text>
        </VStack>
        <Divider p={3} />
      </Container>
    </Layout>
  );
};

export default ArticleList;
