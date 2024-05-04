import { Box } from "@mui/material"
import React from "react"
import { ListRepos } from "./list-repos/list-repos"

export const DashBoard = () => {
    return (
        <Box 
            display={'flex'}
            flexWrap={'nowrap'}>
            <Box style={{width: '200px'}}>
               <ListRepos items={['user/my-git', 'uesrpath/one-git']}/>
            </Box>
            <Box>
                {'right'}
            </Box>
        </Box>
    )
}