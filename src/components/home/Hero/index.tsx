import { Typography } from "@mui/material"
import styles from './styles.module.css'

export function Hero() {

    console.log(styles)
    return (
        <Typography
            variant="h1" 
            fontWeight={500} 
            align="center"
            sx={{
                width: {
                    xs: "80%",
                    md: "60%",
                    lg: "40%",
                    xl: "30%"
                }
            }}
        >
            Learn english talking with an AI
        </Typography>
    )
}