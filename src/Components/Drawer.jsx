import React, { useState } from 'react'
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const PAGES=[{name:"Home",link:'/'},{name:"Insurances",link:'/insurances'},{name:"Our Treatment",link:"/treatment"},{name:"Our Physicians",link:'/physicians'},{name:"About Us",link:'/about'},{name:"Contact Us",link:'/contact'}]
function DrawerCom() {
    const [openDrawer,setopenDrawer]=useState(false)
  return (
    <>
      <Drawer open={openDrawer}
      onClose={()=>setopenDrawer(false)}
      
      >
        {
            PAGES.map((page,index)=>(
          <List  key={index} sx={{background:'#19ce67'}}>
            <ListItemButton component={Link} to={page.link}>
                <ListItemIcon>
                    <ListItemText sx={{color:'white'}}>
                        {page.name}
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
          </List>
            ))
        }
      </Drawer>
          <IconButton  onClick={()=> setopenDrawer(!openDrawer)}>
          <MenuIcon/>
          </IconButton>
    </>
  )
}

export default DrawerCom
