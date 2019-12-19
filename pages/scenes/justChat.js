import React, {useState,useEffect} from 'react'
import '../../styles/general.scss'
import styles from './justChat.module.scss'

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
            setTimeout(()=>stepUp(),5000)
        }
        else{
            setTimeout(()=>stepUp(),15000)
        }
    },[step])
    const links = "Twitter /@ArthurBienSur-Twitch /ArthurBienSur"


    return (
        <main className={styles.container}>
            
            <nav className={step == 2?styles.showLinks:step == 0?styles.hideLinks:null}>
                {links.split("-").map((w,o)=><p key={`links-${o}`}>
                    {w.split('').map((c,i)=><span key={`link-${o}-${i}`}>{c}</span>)}
                </p>)}
            </nav>
        </main>
    )
}