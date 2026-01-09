import FaqQuestion from "./FaqQuestion"
import "./styles/Faq.css"

const faq = [
    {
        pergunta: "O que é React?",
        resposta: "A Python Brasil 2025 é o maior encontro da comunidade Python do Brasil. O evento reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade."
    },
    {
        pergunta: "Qual a programação do evento?",
        resposta: "A Python Brasil 2025 é o maior encontro da comunidade Python do Brasil. O evento reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade."
    },
    {
        pergunta: "Ganho certificado por participar da Python Brasil 2025?",
        resposta: "A Python Brasil 2025 é o maior encontro da comunidade Python do Brasil. O evento reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade."
    },
    {
        pergunta: "Quem organiza a Python Brasil?",
        resposta: "A Python Brasil 2025 é o maior encontro da comunidade Python do Brasil. O evento reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade."
    },
    {
        pergunta: "Quais as condições para adquirir um ingresso de meia entrada?",
        resposta: "A Python Brasil 2025 é o maior encontro da comunidade Python do Brasil. O evento reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade."
    },
]

export default function Faq() {
    return(<>
        <section className="Faq">
            <h3>Perguntas frequentes</h3>

            <div className="Faq_itens">
                {faq.map((faq, index) => (
                    <FaqQuestion
                        key={index}
                        pergunta={faq.pergunta}
                        resposta={faq.resposta}
                    />
                ))}
            </div>
        </section>
    </>)
}