import styles from './index.module.css'

type buttonProps = {
    children:string,
    onClick?:()=>void,
    usage?: 'default' | 'cta' | 'nav'
    status?: false | true
}

export default function Button(
    {children, onClick, usage, status}:buttonProps
){

    if(usage==='cta'){
        return(
            <button {...{onClick}} className={styles.cta}>
                {children}
            </button>
        );
    }else if(usage==='nav'){
        return(
            <button {...{onClick}} className={status?styles.nav_active:styles.nav}>
                {children}
            </button>
        );
    }
    return(
        <button {...{onClick}} className={styles.default}>
            {children}
        </button>
    );

}