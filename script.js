function converter() {
    const valor  = parseFloat(document.getElementById('valor').value);
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;
    const resultado = document.getElementById('Resultado');

    if (isNaN(valor)) {
        resultado.textContent = 'Digite um valor numérico válido.'; 
        return;
    }
    const taxas = {
        BRL: 1,
        USD: 5.00,
        EUR: 5.40
    };

    let valorEmReais;

    if (de === 'BRL') {
        valorEmReais = valor;
    } else {
        valorEmReais = valor * taxas[de];
    }

    let valorConvertido;
    if (para === 'BRL') {
        valorConvertido = valorEmReais;
    } else {
        valorConvertido = valorEmReais / taxas[para];
    }

    resultado.textContent = `Resultado:${valorConvertido.toFixed(2)} ${para}`;
}