
import open from './open.png'
import favorito from './favorito.png'

export const Cards = ({itens, style}) => {
    return (
        <ul className={style.galeria__cards}>
            {itens.map((item) => {
                return (
                    <li key={item.id} className={style.galeria__card} >
                        <img
                            className={style.galeria__imagem}
                            src={item.imagem}
                            alt={item.titulo}
                        />
                        <p className={style.galeria__descricao}>{item.titulo}</p>
                        <div>
                            <p>{item.creditos}</p>
                            <span>
                                <img src={favorito} alt="ícone coração de curtir" />
                                <img src={open} alt="ícone de abrir modal" />
                            </span>
                        </div>
                    </li>
                );
            })}
        </ul>
    )
}