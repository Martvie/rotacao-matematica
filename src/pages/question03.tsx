import { QuestionSort } from "../components/pagesComponents/drag";
const question = {
    title: "Questão 03",
    description: "Identifique os pares, relacionando as equações do segundo grau com suas devidas respostas",
};

export const Question03 = () => {
    return <QuestionSort question={question} />;
};
