import { Container,Badge, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { LadaGridItem } from '../../components/grid-item'




import VAZ2101 from  "../../public/img/VAZ_2101.jpeg"
import VAZ2102 from "../../public/img/VAZ_2102.jpeg"
import VAZ2103 from "../../public/img/VAZ_2103.jpeg"
import VAZ2104 from "../../public/img/VAZ_2104.jpeg"
import VAZ2105 from "../../public/img/VAZ_2105.jpeg"
import VAZ2106 from "../../public/img/VAZ_2106.jpg"
import VAZ2107 from "../../public/img/VAZ_2107.jpeg"
import VAZ2108 from "../../public/img/VAZ_2108.jpeg"
import VAZ2109 from "../../public/img/VAZ_2109.jpeg"
import { HomeLink, LadaInfoLink } from '../../components/car'







const Ladas = () => (

  <Layout title="Lada Models">
    <Container maxW="100%" mb="10vh" padding='7' pt={7}>
      <LadaInfoLink>
        Lada Models
      </LadaInfoLink>
       
     
      <SimpleGrid columns={[1, 1, 2, 2, 3]} gap={20}>
      <Section delay={0.1}>
          <LadaGridItem id="1"  title="VAZ 2101" thumbnail={VAZ2101}>
          გამოშვების წლები :  <Badge fontSize="sm" colorScheme='green'>1970–1988</Badge> 
          </LadaGridItem>
        </Section>
        <Section delay={0.3}>
          <LadaGridItem id="2"  title="VAZ 2102" thumbnail={VAZ2102}>
          გამოშვების წლები :  <Badge fontSize="sm" colorScheme='green'>1971–1983</Badge> 
          </LadaGridItem>
        </Section>
        <Section delay={0.5}>
        <LadaGridItem id="3"  title="VAZ 2103" thumbnail={VAZ2103}>
        გამოშვების წლები :  <Badge fontSize="sm" colorScheme='green'>1972–1984</Badge> 
          </LadaGridItem>
        </Section>

        <Section delay={0.7}>
        <LadaGridItem id="4"  title="VAZ 2104" thumbnail={VAZ2104}>
        გამოშვების წლები :  <Badge fontSize="sm" colorScheme='green'>1984–2012</Badge> 
          </LadaGridItem>
        </Section>
        <Section delay={0.9}>
        <LadaGridItem id="5"  title="VAZ 2105" thumbnail={VAZ2105}>
        გამოშვების წლები :  <Badge fontSize="sm" colorScheme='green'>1980–2010</Badge> 
          </LadaGridItem>
        </Section>
        <Section delay={1.1}>
           <LadaGridItem id="6"  title="VAZ 2106" thumbnail={VAZ2106}>
           გამოშვების წლები :  <Badge fontSize="sm" colorScheme='green'>1975–2006</Badge> 
          </LadaGridItem>
        </Section>
        <Section delay={1.3}>
        <LadaGridItem id="7"  title="VAZ 2107" thumbnail={VAZ2107}>
        გამოშვების წლები :  <Badge fontSize="sm" colorScheme='green'>1984–2012</Badge> 
          </LadaGridItem>
        </Section>
        <Section delay={1.5}>
        <LadaGridItem id="8"  title="VAZ 2108" thumbnail={VAZ2108}>
        გამოშვების წლები :  <Badge fontSize="sm" colorScheme='green'>1987–2011</Badge> 
          </LadaGridItem>
        </Section>
        <Section delay={1.5}>
        <LadaGridItem id="9"  title="VAZ 2109" thumbnail={VAZ2109}>
        გამოშვების წლები :  <Badge fontSize="sm" colorScheme='green'>1984–2013</Badge> 
          </LadaGridItem>
        </Section>
       
       
      </SimpleGrid>

      
    </Container>
  </Layout>
)

export default Ladas
