import { Typography } from "@mui/material"
import styles from './styles.module.css'

export function Hero() {

    return (
        <Typography
            variant="h1"
            className={styles.hero}
        >
            Learn english talking with an AI
        </Typography>
    )
}