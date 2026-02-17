import React from 'react'

function Info({ nome, email, telefone, linkedin, github }) {
    return (
        <div className="info-section responsive">
            <div>
                <h1>
                    {nome}
                </h1>
                <div className="info">
                    <div>
                        <span>{email}</span>
                        <span>{telefone}</span>
                    </div>
                    <div>
                        <span><a target="_blank" href={linkedin}> Linkedin</a></span>
                        <span><a target="_blank" href={github}> Github </a></span>
                    </div>
                </div>
            </div>
            <img src="https://as1.ftcdn.net/v2/jpg/16/65/34/02/1000_F_1665340295_7BnpTMM7bvom3tqnH8U2zbIBsEb0ezet.jpg" />
        </div>
    )
}

export default Info