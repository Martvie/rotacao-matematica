import { useEffect, useState } from "react";
import styled from "styled-components";
import { Option } from "./Option";

type GameOption = {
    id: number;
    type: "equation" | "answer";
    content: string;
    correctAnswerId?: number;
    equationId?: number;
    pairId?: number; // Adicionado para facilitar o pareamento
};

interface SorterProps {
    onComplete?: () => void;
}

const GameContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    max-width: 800px;
`;

const Message = styled.div`
    font-size: 2rem;
    color: #4caf50;
    font-weight: bold;
    padding: 1rem;
    border-radius: 8px;
    background-color: #f8f9fa;
`;

export const Sorter = ({ onComplete }: SorterProps) => {
    // Adicionamos pairId para facilitar o pareamento
    const initialOptions: GameOption[] = [
        { id: 1, type: "equation", content: "x² - 5x + 6 = 0", pairId: 1 },
        { id: 2, type: "equation", content: "x² + 3x - 10 = 0", pairId: 2 },
        { id: 3, type: "equation", content: "2x² - 8x = 0", pairId: 3 },
        { id: 4, type: "answer", content: "x₁=2, x₂=3", pairId: 1 },
        { id: 5, type: "answer", content: "x₁=0, x₂=4", pairId: 3 },
        { id: 6, type: "answer", content: "x₁=2, x₂=-5", pairId: 2 },
    ];

    const [gameOptions, setGameOptions] = useState<GameOption[]>([]);
    const [firstSelection, setFirstSelection] = useState<GameOption | null>(null);
    const [secondSelection, setSecondSelection] = useState<GameOption | null>(null);
    const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
    const [lockBoard, setLockBoard] = useState(false);

    useEffect(() => {
        shuffleOptions();
    }, []);

    const isGameCompleted = () => {
        return initialOptions.filter((opt) => opt.type === "equation").every((equation) => matchedPairs.includes(equation.id));
    };

    useEffect(() => {
        if (isGameCompleted() && onComplete) {
            onComplete();
        }
    }, [matchedPairs, onComplete]);

    const shuffleOptions = () => {
        const shuffled = [...initialOptions].map((option) => ({ ...option })).sort(() => Math.random() - 0.5);
        setGameOptions(shuffled);
    };

    const handleOptionClick = (option: GameOption) => {
        if (lockBoard || matchedPairs.includes(option.id)) return;

        // Se não há primeira seleção
        if (!firstSelection) {
            setFirstSelection(option);
            return;
        }

        // Se clicou no mesmo item
        if (firstSelection.id === option.id) {
            return;
        }

        // Define a segunda seleção
        setSecondSelection(option);
        setLockBoard(true);

        // Verifica se formam um par válido
        const isValidPair = (firstSelection.type === "equation" && option.type === "answer" && option.pairId === firstSelection.pairId) || (firstSelection.type === "answer" && option.type === "equation" && firstSelection.pairId === option.pairId);

        if (isValidPair) {
            setMatchedPairs([...matchedPairs, firstSelection.id, option.id]);
        }

        // Reseta após 1 segundo
        setTimeout(() => {
            setFirstSelection(null);
            setSecondSelection(null);
            setLockBoard(false);
        }, 1000);
    };

    const getOptionClass = (option: GameOption): string => {
        if (matchedPairs.includes(option.id)) return "select";
        if (firstSelection?.id === option.id || secondSelection?.id === option.id) return "selected";
        return "";
    };

    return (
        <GameContainer>
            {isGameCompleted() ? (
                <Message>Parabéns! Você completou o jogo!</Message>
            ) : (
                <OptionsGrid>
                    {gameOptions.map((option) => (
                        <Option key={option.id} content={option.content} className={`options ${getOptionClass(option)}`} onClick={() => handleOptionClick(option)} />
                    ))}
                </OptionsGrid>
            )}
        </GameContainer>
    );
};
