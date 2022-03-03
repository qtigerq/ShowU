import Loading from './Loading'
import styles from './SliderCover.module.css'

const SliderCover = () => {
    return (
        <div className={styles.slider}>
          <h1>Seja bem vindo</h1>
          <div className={styles.loading}>
            <Loading />
          </div>
        </div>
        
    )
}

export default SliderCover