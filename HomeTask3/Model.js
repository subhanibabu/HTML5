class Model{
    constructor() {
    }

   async getAPIData() {
       const res = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3965cc2342c54e7caa002ab6bf398348");
       const json = await res.json();
       return json;
    }
}
