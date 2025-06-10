import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { DraggableOption } from "./draggableOption";

const Div = styled.div`
    background-color: #fff;
    width: 50%;
    min-width: 9rem;
    min-height: 23rem;
    padding: 0.5rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

interface DraggableItem {
    content: string;
    correctPosition: number; // Índice da posição correta
}

interface DraggableProps {
    initialItems: DraggableItem[];
    onComplete?: () => void; // Callback quando o desafio é completado
}

export const Draggable = ({ initialItems, onComplete }: DraggableProps) => {
    const [items, setItems] = useState<DraggableItem[]>([]);
    const [isSolved, setIsSolved] = useState(false);

    // Embaralha os itens garantindo que nenhum esteja na posição correta
    const shuffleItems = (itemsToShuffle: DraggableItem[]) => {
        let shuffledItems = [...itemsToShuffle];
        let isValidShuffle = false;

        // Continua embaralhando até que nenhum item esteja na posição correta
        while (!isValidShuffle) {
            shuffledItems = [...itemsToShuffle].map((item) => ({ ...item })).sort(() => Math.random() - 0.5);

            isValidShuffle = shuffledItems.every((item, index) => item.correctPosition !== index);
        }

        return shuffledItems;
    };

    // Inicializa os itens embaralhados
    useEffect(() => {
        setItems(shuffleItems(initialItems));
    }, [initialItems]);

    // Verifica se a ordem está correta
    const checkSolution = (currentItems: DraggableItem[]) => {
        return currentItems.every((item, index) => item.correctPosition === index);
    };

    const reorder = (list: DraggableItem[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragEnd = (result: any) => {
        if (!result.destination || isSolved) return;

        const newItems = reorder(items, result.source.index, result.destination.index);

        setItems(newItems);

        // Verifica se a solução está correta após cada movimento
        if (checkSolution(newItems)) {
            setIsSolved(true);
            if (onComplete) onComplete();
        }
    };

    return (
        <Div style={{ border: isSolved ? "2px solid #4CAF50" : "2px solid #ddd" }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" direction="vertical">
                    {(provided) => (
                        <article
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                                width: "100%",
                            }}
                        >
                            {items.map((item, index) => (
                                <DraggableOption
                                    key={`${item.content}-${index}`} // Usa conteúdo + índice como chave
                                    content={item.content}
                                    index={index}
                                    isCorrect={item.correctPosition === index}
                                    isSolved={isSolved}
                                />
                            ))}
                            {provided.placeholder}
                        </article>
                    )}
                </Droppable>
            </DragDropContext>
            {isSolved && <p style={{ color: "#4CAF50" }}>✓ Ordem correta!</p>}
        </Div>
    );
};
