import styles from './styles.module.css'

interface FitLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function FitLayout ({children, className}: FitLayoutProps) {
    return (
        <div className={`${styles.fitLayout} ${className}`}>
            {children}
        </div>
    )
}