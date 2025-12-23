import { HTTP } from "./utils/contracts/HTTP";

export class Temperature {
    private readonly baseUrlTemperature: string = "https://api.open-meteo.com/v1";

    constructor(
        private readonly http: HTTP
    ) {}

    // https://open-meteo.com/en/docs#api_documentation
    // https://api.open-meteo.com/v1/forecast?forecast_days=16&latitude=52.52,48.85&longitude=13.41,2.35&hourly=temperature_1m
    public async default(){
        const params = "/forecast?forecast_days=16&latitude=52.52,48.85&longitude=13.41,2.35&hourly=temperature_1m";
        const temperature = await this.http.get(`${this.baseUrlTemperature}${params}`);
        return temperature;
    }
}