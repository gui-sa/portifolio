import styles from './navigator.module.css'
import Button from '../../Button'
import Logo from '@/components/Logo';
import { useState } from 'react';


function LogoHover(){
    const [text,setText] = useState("SalomãoBot")
    return(
        <Logo 
            onMouseEnter={()=>{setText("Guilherme Salomão Agostini")}}
            onMouseLeave={()=>{setText("SalomãoBot")}}
        >
        {text}
        </Logo>
    );
}


export default function Navigator(){

    return(
        <div className={styles.main}>
            <LogoHover/>
            <Button>
                Vamos Conversar!
            </Button>
        </div>
    );

}