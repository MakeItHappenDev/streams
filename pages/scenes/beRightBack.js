import React,{useState,useEffect} from 'react'

import '../../styles/general.scss'
import styles from './beRightBack.module.scss'

const text = "Be/Right/Back"

export default () => {

    const [step,setStep] = useState(0)
    const [idTimeOut,setIdTimeOut] = useState(null)
    //step 0 no Title
    //step 1 fadeIn + slide up
    //step 2 fadeOut + slide up => move to step 0

    const stepUp = () => {
        setStep((step+1)%3)
    }

    useEffect(()=>{
        if(step === 0){
            const id = setTimeout(()=>stepUp(),1000)
            setIdTimeOut(id)
        }
        else if(step === 1){
            const id = setTimeout(()=>stepUp(),10000)
            setIdTimeOut(id)
        }
        else{
            const id = setTimeout(()=>stepUp(),1000)
            setIdTimeOut(id)
        }
    },[step])

    /* if(typeof window !== "undefined"){
        document.addEventListener("visibilitychange", function() {
            if (document.visibilityState === 'visible') {
                window.clearTimeout(idTimeOut)
                setStep(0)
            }
        });
    } */


    return(
        <main className={styles.container}>
            <section className={step === 1?styles.show:step === 2?styles.hide:null}>
                {text.split('/').map((word,i) => 
                <h1 key={`word-${i}`}>{word.split('').map((char,o) => <span key={`char-${i}-${o}`}>{char}</span>)}</h1>
                )}
            </section>

        </main>
    )
}