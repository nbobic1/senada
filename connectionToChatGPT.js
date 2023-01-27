const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function connectToChatGPT() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0,
        max_tokens: 7,
    });
    console.log("Odgovor je " + response);
}
export default connectToChatGPT;


