import OpenAI from "openai";

const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });

export async function chatCompletions( messages : Message[]) {
    const res = await openai.chat.completions.create({
        messages: [
            {role: 'system', content: 'You are an assistant who people can talk to about anything. You act as a person and your responses are as human as possible chating in a chat app as whatsapp or telegram'},
            ...messages
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.7,
    })

    const message = res.choices[0].message

    return message
}
