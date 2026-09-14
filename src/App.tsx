import { Heading } from './components/Heading';
import {Container} from './components/Container'
import { Logo } from './components/Logo';
import { Menu } from './components/Menu'

import './styles/theme.css'
import './styles/global.css'

export function App(){
  
  return(
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu></Menu>
      </Container>
      <Container>
        <Heading>TIMER</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );

}
