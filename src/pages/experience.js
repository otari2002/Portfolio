import styles from "../styles/experience.module.css";
import experiences from "../assets/experiences.json";
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText } from "@coreui/react";

export default function Experience(){
    function Card(props){
        return (
            <>
            <p className={styles.cardDate}><strong>{props.src.date}</strong></p>
            <CCard>
            <CCardBody>
                <CCardTitle>{props.src.title}</CCardTitle>
                <CCardSubtitle className="mb-2 text-medium-emphasis">{props.src.detail}</CCardSubtitle>
                <CCardText>{props.src.comment}</CCardText>
            </CCardBody>
            </CCard>
            </>
        )
    }

    return (
        <div className={styles.Experience}>
            <h1 className={styles.title}>Experience</h1>
            <div className={styles.column}>
                {experiences.map(function(exp, index){
                    return (
                        <div key={index} className={styles.cardNsep}>
                            <div className={styles.card}>
                                <Card src={exp} />
                            </div>
                            { experiences[index+1] ? 
                                (<>
                                    <span className={styles.dot}></span>
                                    <div className={styles.seperator}></div>
                                </>) : <></>
                            }
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}