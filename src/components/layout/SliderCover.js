import Loading from './Loading'
import styles from './SliderCover.module.css'

const SliderCover = () => {
    return (
        <div className={styles.slider}>
          <div className={styles.slider_welcome}>
            <h1>Um momento...</h1>
          </div>
          <div className={styles.slider_loading}>
            <Loading />
          </div>
        </div>
        
    )
}

export default SliderCover