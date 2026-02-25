import React from 'react'

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
                <img src="https://as1.ftcdn.net/v2/jpg/16/65/34/02/1000_F_1665340295_7BnpTMM7bvom3tqnH8U2zbIBsEb0ezet.jpg" />
            </div>
        </div>
    )
}

export default Info