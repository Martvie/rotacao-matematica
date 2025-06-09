import { useState } from "react";
import styled from "styled-components";
import useTimer from "../../hooks/timer";
import { verify } from "../../utils/verify";
import { BigButton } from "../bigButton";
import { Header } from "../header";
import { Question } from "../question";
import { Validator } from "../validator";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 98vh;
`;

const Message = styled.div`
    display: flex;
    gap: 1rem;

    flex-direction: column;
`;

interface IQuesiton {
    question: { title: string; description: string; result: string };
}

export const QuestionInput = ({ question }: IQuesiton) => {
    const [respota, setResposta] = useState("");
    const [equipe, setEquipe] = useState("");
    const [finalizado, setFinalizado] = useState(false);
    const { time, start, pause, reset } = useTimer();

    const finalizar = () => {
        if (verify(question.result, respota)) {
            pause();
            setFinalizado(true);
        } else {
            setResposta("");
        }
    };

    const handleReiniciar = () => {
        reset();
        setFinalizado(false);
        setResposta("");
    };
    const handleTime = (segundos: number) => {
        if (segundos < 60) {
            return `${segundos} segundos`;
        } else {
            const minutos = Math.floor(segundos / 60);
            const segundosRestantes = segundos % 60;
            return `${minutos} minuto${minutos !== 1 ? "s" : ""} e ${segundosRestantes} segundo${segundosRestantes !== 1 ? "s" : ""}`;
        }
    };

    return (
        <>
            <Header />
            <Div>
                {finalizado ? (
                    <Message>
                        <h2>
                            Equipe {equipe} terminou em {handleTime(time)} segundos!
                        </h2>
                        <BigButton name="Reiniciar" onClick={handleReiniciar} />
                    </Message>
                ) : (
                    <>
                        <div>Tempo: {time}s</div>
                        {time === 0 ? (
                            <Message>
                                <h2>Nome da equipe</h2>
                                <input onChange={(event) => setEquipe(event.target.value)} />
                                <BigButton name="Começar" onClick={start} />
                            </Message>
                        ) : (
                            <>
                                <Question title={question.title} description={question.description} />
                                <Validator value={respota} onChange={(event) => setResposta(event.target.value)} onClick={finalizar} />
                            </>
                        )}
                    </>
                )}
            </Div>
        </>
    );
};
