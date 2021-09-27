import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import styles from "../styles/Home.module.css"
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbodi'

export default function Home() {
  return (
    <div >
      <div className={styles.container}>
      <CssBaseline />
    
      <Sidebar/>
    <div className={styles.bodi}>
      <Navbar/>
      <Mainbody/>
    </div>
      </div>

    
    </div>
  )
}
