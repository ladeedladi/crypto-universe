import styles from "../styles/Sidebar.module.css"
import a from "../public/a.jpg"
import { Avatar } from "@mui/material"
import { Button } from "@mui/material"
import Image from "next/image"
export default function Sidebar() {
    return (
        <>
      <div className={styles.sidebar}>
          <div className={styles.firstdiv}>
        
<Image src="/../public/a.jpg" width={100} height={100} layout="responsive"/>

          <h3>crypto-universe</h3>
           </div>
           <div className={styles.seconddiv}>

           <Button variant="text">pages</Button>
           <Button variant="text">resiumes</Button>
           <Button variant="text">cleaches</Button>
           </div>
      </div>
   
    
        </>
    )
}


