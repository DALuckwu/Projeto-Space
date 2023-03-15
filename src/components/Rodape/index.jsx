import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import styles from './Rodape.module.scss'

export const Rodape = () => {
    return(
            <footer className={styles.rodape}>
                <div className={styles.rodape__icones}>
                    <AiOutlineFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineWhatsApp />
                </div>
                <p>Desenvolvido por Dara Luckwu</p>
            </footer>
    )
}