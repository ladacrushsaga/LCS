import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" w='100%' pb={5}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="React/Next.js game Lada Crush Saga" />
        <meta name="keywords" content="Play Lada Crush Saga " />
        <meta name="author" content="LCS Team" />

        <link rel="LCS-Icon" href="/Logo/LogoMini.png" />
        <link rel="shortcut icon" href="/Logo/LogoMini.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LCS" />
        <meta name="twitter:creator" content="@LCS" />
        <meta name="twitter:image" content="Logo/LogoDark.png" />
        <meta property="og:site_name" content="LCS" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="Logo/LogoDark.png" />
        <title>LCS - Homepage</title>
      </Head>

      

      <Container maxW="100%" padding={0} pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
