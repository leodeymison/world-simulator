import axios from "axios";
import { HTTP, ConfigHttp } from "../contracts/HTTP";

export class Axios implements HTTP {
    private baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl;
    }
    
    async get(path: string, options?: ConfigHttp ): Promise<{ data: any; }> {
        let OptionsConfig: { [key in string]: any } = {};

        if(options?.headers){
            OptionsConfig["headers"] = options.headers;
        }

        const { data } = await axios.get(`${this.baseUrl}${path}`, OptionsConfig);

        return { data };
    }
    async post<TBody>(path: string, body: TBody, options?: ConfigHttp ): Promise<{ data: any; }> {
        let OptionsConfig: { [key in string]: any } = {};

        if(options?.headers){
            OptionsConfig["headers"] = options.headers;
        }
        
        const { data } = await axios.post(`${this.baseUrl}${path}`, body, OptionsConfig);

        return { data };
    }
    async put<TBody>(path: string, body: TBody, options?: ConfigHttp ): Promise<{ data: any; }> {
        let OptionsConfig: { [key in string]: any } = {};

        if(options?.headers){
            OptionsConfig["headers"] = options.headers;
        }
        
        const { data } = await axios.put(`${this.baseUrl}${path}`, body, OptionsConfig);

        return { data };
    }
    async patch<TBody>(path: string, body: TBody, options?: ConfigHttp ): Promise<{ data: any; }> {
        let OptionsConfig: { [key in string]: any } = {};

        if(options?.headers){
            OptionsConfig["headers"] = options.headers;
        }
        
        const { data } = await axios.patch(`${this.baseUrl}${path}`, body, OptionsConfig);

        return { data };
    }
    async delete<TBody>(path: string, options?: ConfigHttp ): Promise<{ data: any; }> {
        let OptionsConfig: { [key in string]: any } = {};

        if(options?.headers){
            OptionsConfig["headers"] = options.headers;
        }
        
        const { data } = await axios.delete(`${this.baseUrl}${path}`, OptionsConfig);

        return { data };
    }
}