import React, {useState,useEffect} from 'react'
import '../styles/general.scss'
import styles from './startingSoon.module.scss'

export default () => {

     const [step,setStep] = useState(0)
     const stepUp = () => {
        if(step == 2){
            setStep(0)
        }
        else{
            setStep(step+1)
        }
     }
     

    useEffect(()=>{
        if(step === 0){
            //title is steped, timeout 10s to clear it
            setTimeout(()=>stepUp(),1000)
        }
        else if(step == 1){
            setTimeout(()=>stepUp(),10000)
        }
        else{
            //title is cleared, timeout 5s to step it
            setTimeout(()=>stepUp(),4000)
        }
    },[step])

    const text = "Starting-soon"


    return (
        <main className={styles.container}>
            <section className={styles.title}>
                <h1 className={step == 1?styles.show:step == 2?styles.hide:null}>
                    {text.split("-").map((w,o)=><span key={`word-${o}`}>
                        {w.split('').map((c,i)=><span key={`letter-${o}-${i}`}>{c}</span>)}
                    </span>)}
                </h1>
            </section>
            <nav></nav>
        </main>
    )
}