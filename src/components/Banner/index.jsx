import banner from './banner.png';
import styles from './Banner.module.scss';

export const Banner = () => {
    return(
        <div className={styles.banner}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="Imagem da terra vista do espaço" />
        </div>
    )
}