import { QuestionInput } from "../../components/pagesComponents/questionInput";

export const InputDemo = () => {
    const questão = {
        title: "Questão teste",
        description: "A resposta para a questão e 2",
        result: "2",
    };

    return <QuestionInput question={questão} />;
};
