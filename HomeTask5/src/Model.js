export default class Model{
    constructor() {
    }

   async getAPIData() {
       console.log('get API data call started');
       const res = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3965cc2342c54e7caa002ab6bf398348");
       const json = await res.json();
       console.log('get API data call ended');
       return json;
    }

    async getHeadLines()
    {
        const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3965cc2342c54e7caa002ab6bf398348");
        const json = await res.json();
        return json;
    }
}
