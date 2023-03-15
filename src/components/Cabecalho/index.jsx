import search from './search.png'
import logo from './logo.png'
import styles from './cabecalho.module.scss'
export const Cabecalho = () => {
    return (
        <div>
            <header className={styles.cabecalho}>
                <img src={logo} alt="Logo do projeto" />
                <div className={styles.cabecalho}>
                    <input 
                        className={styles.cabecalho__input}
                        type='text' 
                        placeholder="O que você procura?"/>
                    <img src={search} alt="ícone de lupa" />
                </div>
            </header>
        </div>
    )
}