import React from 'react'
import fotoProfile from '../assets/img/foto.png'

function Info({ nome, email, telefone, linkedin, github }) {
    return (
        <div className="info-section">
            <div className="info-content">
                <div className="text-content">
                    <h1>
                        {nome}
                    </h1>
                    <div className="info">
                        <div className="w-5">
                            <div>{email}</div>
                            <div>{telefone}</div>
                        </div>
                        <div className="w-5">
                            <div><a target="_blank" href={linkedin}> Linkedin</a></div>
                            <div><a target="_blank" href={github}> Github </a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={ fotoProfile } />
            </div>
        </div>
    )
}

export default Info