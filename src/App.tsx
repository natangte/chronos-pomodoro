import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'

export function App(){
  
  return(
    <>
      <Heading atrr={123} attr2='string' >Olá Mundo 1!</Heading> 
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Impedit vero architecto velit repellendus odio reiciendis non esse repellat placeat, 
        molestias quam debitis! Repellat libero doloremque fuga! 
        Ipsam asperiores perferendis deleniti?
        </p>
    </>
  );

}
