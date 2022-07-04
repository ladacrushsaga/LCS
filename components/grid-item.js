import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'


export const LadaGridItem = ({ children, id, title, thumbnail }) => (

  <Box w="100%"  textAlign="center"  >

    <NextLink href={`/ladainfo/${id}`}>

      <LinkBox  cursor="pointer">
        <Image
          layout="responsive"
          src={thumbnail}
          alt={title}
          className="car-item-thumbnail"
        />
        <LinkOverlay href={`/ladainfo/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)


export const GridItemStyle = () => (
  <Global
    styles={`
      .car-item-thumbnail {
        border-radius: 10px; 
      }
    `}
  />
)
