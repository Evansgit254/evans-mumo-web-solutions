import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email, subject, message } = data;

        // Create a simple message object
        const newMessage = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            name,
            email,
            subject,
            message,
        };

        // Path to the messages file in the project root
        const filePath = path.join(process.cwd(), 'messages.json');

        // Read existing messages or initialize empty array
        let messages = [];
        try {
            const fileData = await fs.readFile(filePath, 'utf8');
            messages = JSON.parse(fileData);
        } catch (error) {
            // File doesn't exist yet, that's fine
        }

        // Add new message
        messages.push(newMessage);

        // Save back to file
        await fs.writeFile(filePath, JSON.stringify(messages, null, 2), 'utf8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
