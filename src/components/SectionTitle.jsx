import React from 'react'

function SectionTitle({ children, title, periodo, descricao }) {
    return (
        <div>
            <div className="titulo-secao">
                {title}
            </div>
            <div className="subtitulo-secao">
                {descricao} - (<i>{periodo}</i>)
            </div>
        </div>
    )
}

export default SectionTitle