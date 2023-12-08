import styles from './index.module.css'

type buttonProps = {
    children:string,
    onClick?:()=>void,
    usage?: 'default' | 'cta'
}

export default function Button(
    {children, onClick, usage}:buttonProps
){

    if(usage==='cta'){
        return(
            <button {...{onClick}} className={styles.cta}>
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