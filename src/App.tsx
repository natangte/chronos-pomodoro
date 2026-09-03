import { Heading } from './components/Heading';
import {TimerIcon} from 'lucide-react'

import './styles/theme.css'
import './styles/global.css'

export function App(){
  
  return(
    <>
      <Heading>
        Olá Mundo 1!
        <button>
          <TimerIcon />
        </button>
      </Heading> 
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Impedit vero architecto velit repellendus odio reiciendis non esse repellat placeat, 
        molestias quam debitis! Repellat libero doloremque fuga! 
        Ipsam asperiores perferendis deleniti?
        </p>
    </>
  );

}
