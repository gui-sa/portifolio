import styles from './navigator.module.css'
import Button from '../../Button'
import Logo from '@/components/Logo';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

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

type navigatorProp={
    navList: 0 | 1 | 2 
}

export default function Navigator({navList}:navigatorProp){
    const router = useRouter();

    return(
        <div className={styles.main}>
            <LogoHover/>
            <div className={styles.nav_items}>
                <Button onClick={()=>{router.push('/')}} usage='nav' status={(navList===0)}> 
                    Casa
                </Button>
                <Button onClick={()=>{router.push('/multiverso')}} usage='nav' status={(navList===1)}> 
                    Multiverso
                </Button>
                <Button onClick={()=>{router.push('/artigos')}} usage='nav' status={(navList===2)}> 
                    Artigos
                </Button>
            </div>
            <Button>
                Vamos Conversar!
            </Button>
        </div>
    );

}