import axios from "axios";


const KEY = 'R0UV0SXG8YBJQ88F'

export default axios.create({
    baseURL: 'https://api.thingspeak.com/channels/1885967/',
    params:
    {
        api_key: KEY,
        results: 50
    }
})


// https://api.thingspeak.com/channels/1885967/feeds.json?api_key=R0UV0SXG8YBJQ88F&results=2