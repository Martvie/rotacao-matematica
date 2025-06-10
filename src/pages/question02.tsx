import { ReorderPage } from "../components/pagesComponents/reorderPage";

const question = {
    title: "Questão 02",
    description: "Reordene a segunda tabela de forma que as respostas correspondam as questões da primeira tabela",
    myItens: [
        { content: "4xy(x²-2y²)", correctPosition: 0 },
        { content: "xy(x+y+2)", correctPosition: 1 },
        { content: "3xy(x+2y)", correctPosition: 2 },
        { content: "2xy(x-2y+3)", correctPosition: 3 },
    ],
};

export const Question02 = () => {
    return <ReorderPage question={question} />;
};
