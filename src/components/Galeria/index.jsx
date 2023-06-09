import { Tags } from "../Tags"
import style from './Galeria.module.scss'
import fotos from './fotos.json'

import { Cards } from "./Cards"
import { useState } from "react"

export const Galeria = () => {
    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map((valor) => valor.tag))];

    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return(
                foto.tag === tag
            )
        })
        setItens(novasFotos)
    }

    return (
        <section className={style.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
            <Cards itens={itens} style={style}/>
        </section>
    )
}