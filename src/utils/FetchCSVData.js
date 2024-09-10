export default async function FetchCSVData(sheetURL) {
    // Validações
    const validURL =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZdilNUPBuOgAh1C-kfY0JcFpxB3pHzSmaNxJvAVzulgupXfT-NeHKimlJSbPkmlS6nZBY8T1aZGLP/pub?output=csv";

    if (sheetURL !== validURL) {
        throw new Error("URL desconhecida. Verifique a URL da planilha.");
    }

    try {
        const response = await fetch(sheetURL);
        if (!response.ok) {
            throw new Error(`Erro na resposta da rede: ${response.statusText}`);
        }

        const csvText = await response.text();
        const sheetObjects = csvToObjects(csvText);

        return sheetObjects;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        return null; // Retorna null ou trate o erro conforme apropriado
    }
}

// Função separada para converter CSV para objetos
function csvToObjects(csv) {
    const [header, ...rows] = csv
        .trim()
        .split("\n")
        .map((row) => row.trim())
        .filter((row) => row);

    const propertyNames = parseCSVLine(header); // Usa a função para dividir corretamente o cabeçalho

    return rows.map((row) => {
        const values = parseCSVLine(row); // Usa a função para dividir corretamente os valores
        console.log("values: ", values);
        return propertyNames.reduce((obj, propertyName, index) => {
            obj[propertyName] = values[index] || ""; // Garante que o valor seja definido, mesmo que seja vazio
            return obj;
        }, {});
    });
}

// Função para dividir uma linha CSV em campos, considerando aspas duplas
function parseCSVLine(line) {
    const regex = /(?:,|\s|^)(?:"([^"]*?)"|([^",]*))/g;
    const result = [];
    let match;

    while ((match = regex.exec(line))) {
        result.push(match[1] || match[2] || ""); // Pega o campo dentro de aspas ou o campo normal
    }

    return result;
}
