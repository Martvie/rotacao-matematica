import { QuestionInput } from "../components/pagesComponents/questionInput";
import img from "../img/Captura de tela de 2025-06-10 00-24-17.png";
import { questões } from "../utils/questions";

const questão = questões[0];

export const Question01 = () => {
    return (
        <QuestionInput question={questão}>
            <img src={img}></img>
        </QuestionInput>
    );
};
