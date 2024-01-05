import styles from "./match.module.css"
import Image from "next/image"
import Navbar from "@/components/Navbar"


export default function match(){
    return(
    <div className={styles.title_match}>
        <Navbar/>
            <div className={styles.content_match}>
                hi
            </div>
    </div>
    )
}