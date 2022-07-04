import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: scale(0.8);
    
  }
`

const Logo = () => {
   const Logo = `/Logo/Logo${useColorModeValue('Light', 'Dark')}.png`
  
  

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={Logo} width={105} height={55} alt="logo" />
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo



