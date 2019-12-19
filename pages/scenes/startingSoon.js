import React, {useState,useEffect} from 'react'
import '../../styles/general.scss'
import styles from './startingSoon.module.scss'

export default () => {

     const [step,setStep] = useState(0)
     const stepUp = () => {
            setStep((step+1)%3)
     }
     

    useEffect(()=>{
        if(step === 0){
            setTimeout(()=>stepUp(),1500)
        }
        else if(step == 1){
            setTimeout(()=>stepUp(),10000)
        }
        else{
            setTimeout(()=>stepUp(),10000)
        }
    },[step])

    const text = "Starting-soon"
    const links = "Twitter /@ArthurBienSur-Twitch /ArthurBienSur"


    return (
        <main className={styles.container}>
            <section className={styles.title}>
                <h1 className={step == 1?styles.show:step == 2?styles.hide:null}>
                    {text.split("-").map((w,o)=><span key={`word-${o}`}>
                        {w.split('').map((c,i)=><span key={`letter-${o}-${i}`}>{c}</span>)}
                    </span>)}
                </h1>
            </section>
            <nav className={step == 2?styles.showLinks:step == 0?styles.hideLinks:null}>
                {links.split("-").map((w,o)=><p key={`links-${o}`}>
                    {w.split('').map((c,i)=><span key={`link-${o}-${i}`}>{c}</span>)}
                </p>)}
            </nav>
        </main>
    )
}