export default function Formula(operacao, n1, n2) {
    let resultado; 

    if (operacao === '+') resultado = parseFloat(n1) + parseFloat(n2);
    if (operacao === '-') resultado = parseFloat(n1) - parseFloat(n2);
    if (operacao === '*') resultado = parseFloat(n1) * parseFloat(n2);
    if (operacao === '/') resultado = parseFloat(n1) / parseFloat(n2);

    return resultado;
}