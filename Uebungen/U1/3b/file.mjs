import fs from 'fs/promises';

export async function handleFile(fileName = "datum.txt", text, writer = console.log) {
    let content = ""

    try {
        await fs.writeFile(fileName, text);
        content = await fs.readFile(fileName, {encoding: "utf-8"});
        await fs.unlink(fileName);
    } catch (error) {
        content = 'Error';
    }

    writer(content);
}