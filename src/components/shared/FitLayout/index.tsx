import styles from './styles.module.css'

export function FitLayout ({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.fitLayout}>
            {children}
        </div>
    )
}