export function verify(questionResponse: string | number | any[], response: string): boolean {
    if (Array.isArray(questionResponse)) {
        questionResponse = questionResponse.toString();
    }

    const expected = String(questionResponse).toLowerCase().trim();
    const received = String(response).toLowerCase().trim();

    const normalize = (str: string) => str.replace(/\s+/g, "");

    if (normalize(expected) === normalize(received)) {
        return true;
    }

    return false;
}
