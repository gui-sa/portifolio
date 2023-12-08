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


export default function Navigator(){
    const router = useRouter();

    return(
        <div className={styles.main}>
            <LogoHover/>
            <div className={styles.nav_items}>
                <Button onClick={()=>{router.push('/')}} usage='nav' status={true}> 
                    Casa
                </Button>
                <Button onClick={()=>{router.push('/multiverso')}} usage='nav'> 
                    Multiverso
                </Button>
                <Button onClick={()=>{router.push('/artigos')}} usage='nav'> 
                    Artigos
                </Button>
            </div>
            <Button>
                Vamos Conversar!
            </Button>
        </div>
    );

}