import styles from './index.module.css'

type logoProps={
    children:string
    onMouseEnter?:()=>void;
    onMouseLeave?:()=>void;
}

export default function Logo(
    {children,onMouseEnter,onMouseLeave}:logoProps
){
    return(
        <div onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        className={styles.main}
        >
            <div className={styles.icon}></div>
            <p>{children}</p>
        </div>
    );
}