import { useState } from "react";
import styled from "styled-components";
import useTimer from "../../hooks/timer";
import { BigButton } from "../bigButton";
import { ColumnOption } from "../columnOption";
import { Draggable } from "../draggable";
import { Header } from "../header";
import { Question } from "../question";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 98vh;
`;

const DivQuestions = styled.div`
    background-color: #fff;
    width: 50%;
    min-width: 9rem;
    min-height: 23rem;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`;

const H2 = styled.h2`
    color: ${(props) => props.theme.colors.text.light};
`;

const Message = styled.div`
    display: flex;
    gap: 1rem;

    flex-direction: column;
`;

interface DraggableItem {
    content: string;
    correctPosition: number; // Índice da posição correta
}

interface IQuesiton {
    question: { title: string; description: string; myItens: DraggableItem[] };
}

export const ReorderPage = ({ question }: IQuesiton) => {
    const [equipe, setEquipe] = useState("");
    const [finalizado, setFinalizado] = useState(false);
    const { time, start, pause, reset } = useTimer();

    const finalizar = () => {
        pause();
        setFinalizado(true);
    };

    const handleReiniciar = () => {
        reset();
        setFinalizado(false);
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
                        <H2>
                            Equipe {equipe} terminou em {handleTime(time)} segundos!
                        </H2>
                        <BigButton name="Reiniciar" onClick={handleReiniciar} />
                    </Message>
                ) : (
                    <>
                        {time === 0 ? (
                            <Message>
                                <H2>Nome da equipe</H2>
                                <input onChange={(event) => setEquipe(event.target.value)} />
                                <BigButton name="Começar" onClick={start} />
                            </Message>
                        ) : (
                            <>
                                <Question title={question.title} description={question.description}>
                                    <DivQuestions>
                                        <ColumnOption content="4x³y + 8xy³"></ColumnOption>
                                        <ColumnOption content="x²y+xy²+2xy"></ColumnOption>
                                        <ColumnOption content="3x²y+6xy²"></ColumnOption>
                                        <ColumnOption content="2x²y-4xy²+6xy"></ColumnOption>
                                    </DivQuestions>
                                    <Draggable initialItems={question.myItens} onComplete={finalizar} />
                                </Question>
                            </>
                        )}
                    </>
                )}
            </Div>
        </>
    );
};
