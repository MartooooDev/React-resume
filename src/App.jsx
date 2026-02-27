import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './components/Info'
import Experiencias from './components/Experiencias'
import Escolaridade from './components/Escolaridade'
import Titulo from './components/Titulo'
import SectionTitle from './components/SectionTitle'
import SectionText from './components/SectionText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="content">
        <Info nome="Martin Romão da Silva" email="martin.romao@hotmail.com" telefone="(42) 9 8402-2334" linkedin="https://www.linkedin.com/in/martin-rom%C3%A3o-da-silva-b2b48a219/" github="github">
        </Info>

        <Titulo>Resumo profissional</Titulo>
        <SectionText>
          Engenheiro de Software com experiência prática em desenvolvimento Back-end,
          especializado em PHP e CodeIgniter. Focado na entrega de software de alta
          qualidade através de arquitetura MVC, Clean Code e versionamento rigoroso.
          Possuo histórico comprovado de melhoria em sistemas legados, resultando em
          maior legibilidade e redução de tempo de suporte. Complemento meu perfil
          técnico com experiência em gestão de projetos.
        </SectionText>

        <Titulo>Competências</Titulo>
        <SectionText>
          <ul>
            <li>
              <p>
                <strong>Idiomas: </strong> Inglês avançado.
              </p>
            </li>
            <li>
              <p>
                <strong>Linguagens e frameworks: </strong> PHP, CodeIgniter 3, JavaScript, HTML5, CSS3.
              </p>
            </li>
            <li>
              <p>
                <strong>Banco de dados: </strong> MySQL.
              </p>
            </li>
            <li>
              <p>
                <strong>Ferramentas: </strong> Git/Github, Versionamento Semântico (Conventional Commit Patterns), Notion, Trello, Google Workspace.
              </p>
            </li>
            <li>
              <p>
                <strong>Arquitetura: </strong> MVC.
              </p>
            </li>
            <li>
              <p>
                <strong>Conceitos diversos: </strong> Clean Code, POO, Manutenção de sistemas legado.
              </p>
            </li>
          </ul>
        </SectionText>

        <Titulo>Experiências</Titulo>
        <Experiencias />
        <SectionTitle title="Cosmos Wide" descricao="Desenvolvedor Back-end JR" periodo="mai/2024 - atual">
        </SectionTitle>
        <SectionText>
          Atuação no ciclo completo de desenvolvimento de sistemas web personalizados, buscando garantir performance, estabilidade e usabilidade.
          <ul>
            <li>
              <p>
                <strong>Desenvolvimento e manutenção </strong>: implementação de novas features e manutenção em sistemas já funcionando utilizando PHP com o framework CodeIgniter em arquitetura MVC.
              </p>
            </li>
            <li>
              <p>
                <strong>Otimização de código </strong>: Refatoração de códigos legados aplicando princípios de Clean Code, de forma a aumentar a legibilidade de código e diminuir o tempo necessário para problemas de suporte nos sistemas.
              </p>
            </li>
            <li>
              <p>
                <strong>Padronização </strong>: Implementação de <i>Conventional Commit Patterns</i> nos commits de código, facilitando o rastreamento de versões e funcionalidades pelo histórico do Git.
              </p>
            </li>
            <li>
              <p>
                <strong>Banco de dados</strong>: gerenciamento de bases de dados dos sistemas dos clientes e otimização de consultas MySQL.
              </p>
            </li>
          </ul>
        </SectionText>

        <SectionTitle title="Senior Curitiba" descricao="Estagiário em projetos" periodo="mar/2023 - dez/2023">
        </SectionTitle>
        <SectionText>
          Auxílio aos gerentes de projeto em implementação de software (ERP e RH) e aos consultores com suas rotinas e controle de atividades.
          <ul>
            <li>
              <p>
                <strong>Documentação: </strong> Elaboração de documentos de todas as fases do ciclo de vida dos projetos (TAP, TEP, DRA, Atas de reunião, documentos complementares, etc.), garantindo o registro e a qualidade das entregas..
              </p>
            </li>
            <li>
              <p>
                <strong>Gestão de Implementação: </strong> Acompanhamento de cronogramas e progresso de projetos de sistemas ERP.
              </p>
            </li>
            <li>
              <p>
                <strong>Interface com Cliente: </strong> Condução de reuniões de alinhamento entre consultores e clientes para controle de escopo e prazos.
              </p>
            </li>
          </ul>
        </SectionText>


        <Titulo>Formação Acadêmica</Titulo>
        <Escolaridade />
        <SectionTitle title="Pontifícia Universidade Católica do Paraná" descricao="Graduação - Bacharelado em Engenharia de Software" periodo="ago/2021 - jun/2025">
        </SectionTitle>
        <SectionText>
          <strong>Bacharelado em Engenharia de Software</strong> pela Pontifícia Universidade Católica do Paraná
          <ul>
            <li>
              <p>
                <strong>Conquista</strong>: Premiação de Honra Acadêmica por desempenho exemplar no decorrer do curso.
              </p>
            </li>
          </ul>
        </SectionText>
      </div>
    </>
  )
}

export default App
