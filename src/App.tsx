import { Heading } from './components/Heading';
import {Container} from './components/Container'
import { Logo } from './components/Logo';
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Form } from './components/Form'

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
        <CountDown></CountDown>
      </Container>
      <Container>
        <Input></Input>
        <Form></Form>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );

}
