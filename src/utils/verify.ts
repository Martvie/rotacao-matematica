export function verify(questionRespondese: string | number | [], response: string) {
    if (questionRespondese == response) {
        return true;
    } else {
        return false;
    }
}
