interface Iquestion {
    title: string;
    description: string;
    result: number | string | [];
}

export const questões: Iquestion[] = [
    {
        title: "Questão 01",
        description: "Determine a expressão algébrica que correspondem a área da superfície total e o volume do paralelepípedo a seguir",
        result: "4xy + 2x²",
    },
    {
        title: "Questão 02",
        description: "Bla bla",
        result: 0,
    },
    {
        title: "Questão 03",
        description: "Bla bla",
        result: 2,
    },
    {
        title: "Questão 04",
        description: "Bla bla",
        result: 2,
    },
];
