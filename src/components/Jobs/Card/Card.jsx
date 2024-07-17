import React from 'react'
import styles from './Card.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.imgc}>
                <img className={styles.img} src='https://i.postimg.cc/P5Bwd7d1/logo-01.png'></img>
                <button className={styles.jdes}>Job Description</button>
            </div>
            <h2 className={styles.head}>Copywriter</h2>
            <div className={styles.dec}>
                <div className={styles.location}>
                    <FaLocationDot className={styles.cardlogo} /><p className={styles.p}>Kolkata</p>
                </div>
                <div className={styles.location}>
                    <CiDollar className={styles.cardlogo} /> <p className={styles.p}>20,000/month</p>
                </div>
                <div className={styles.location}>
                    <PiBagFill className={styles.cardlogo} /> <p className={styles.p}>1-2 Year Exp.</p>
                </div>
                <button className={styles.btn}>
                    <FaWhatsapp className={styles.wht}/>
                    Chat With Recruiter</button>
            </div>
        </div>
    )
}

export default Card