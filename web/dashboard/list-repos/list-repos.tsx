import { Box, List, ListItemButton, ListItemText } from "@mui/material"
import React from "react"

type folderPath = string;

type ListRepos = {
    items: folderPath[];
}

export const ListRepos = ({ items = [] }: ListRepos) => {
    return (
        <Box>
            <List>
                {items.map((item, index) => (
                    <ListItemButton key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                        <ListItemText primary={item} />
                        <ListItemText secondary={item} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    )
}