import React, {useState,useEffect} from 'react'
import '../styles/general.scss'
import styles from './startingSoon.module.scss'

export default () => {

     const [show,setShow] = useState(true)

    useEffect(()=>{
        if(show){
            //title is showed, timeout 10s to clear it
            setTimeout(()=>setShow(false),10000)
        }
        else{
            //title is cleared, timeout 5s to show it
            setTimeout(()=>setShow(true),5000)
        }
    },[show])


    return (
        <main className={styles.container}>
            <section className={styles.title}>
                <h1 className={show?styles.show:null}>
                    <span>Starting</span>
                    <span>soon</span>
                </h1>
            </section>
        </main>
    )
}