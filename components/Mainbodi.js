import React from 'react'
import styles from "../styles/Mainbodi.module.css"
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const arr=[{id:1,name:"ladeed"},
{id:2,name:"ldeed"},
{id:3,name:"leed"},
{id:4,name:"eed"},
{id:5,name:"ld"},

]
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Mainbody = () => {
    return (
       <div className={styles.container}>
           <div className={styles.inputcontainer}>
        <input/>

           </div>

           <div className={styles.gridcontainer}>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
{arr.map(el=>(<Grid item xs={4}>
          <Item>{el.id}
          <h1>{el.name}</h1>
          </Item>
        </Grid>))}
</Grid>
       </div>
       </div>

    )
}

export default Mainbody
