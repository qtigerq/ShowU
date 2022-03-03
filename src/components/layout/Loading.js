import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.lds_ellipsis}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Loading