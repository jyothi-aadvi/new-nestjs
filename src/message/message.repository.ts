import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
    async findOne(id: string) {
        const contents = await readFile('message.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll() {
        const contents = await readFile('message.json', 'utf8');
        return JSON.parse(contents);
    }

    async create(content: string) {
        const contents = await readFile('message.json', 'utf8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await writeFile('message.json', JSON.stringify(messages));
        return { id, content };
    }
}
