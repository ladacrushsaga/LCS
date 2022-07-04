import React from "react";
import {
  Container,
} from "@chakra-ui/react";


import Layout from "../components/layouts/article";

import LandingOne from "../components/landingone";







function Home() {


  return (
    <Layout title="Home">
      {
        <Container maxW="100%" padding={0} mt={{ base: '0', md: -14 }} >
      
    <LandingOne/>
    
          
        </Container>
      }
    </Layout>
  );
}

export default Home;
