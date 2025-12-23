import axios from "axios";
import { HTTP } from "../contracts/HTTP";

export class Axios implements HTTP {
    private baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl;
    }
    
    async get(path: string, options: { headers: { [key in string]: string; }; }): Promise<{ data: any; }> {
        const { data } = await axios.get(`${this.baseUrl}${path}`, {
            headers: options.headers
        });
        return { data };
    }
    async post<TBody>(path: string, body: TBody, options: { headers: { [key in string]: string; }; }): Promise<{ data: any; }> {
        throw new Error("Method not implemented.");
    }
    async put<TBody>(path: string, body: TBody, options: { headers: { [key in string]: string; }; }): Promise<{ data: any; }> {
        throw new Error("Method not implemented.");
    }
    async patch<TBody>(path: string, body: TBody, options: { headers: { [key in string]: string; }; }): Promise<{ data: any; }> {
        throw new Error("Method not implemented.");
    }
    async delete<TBody>(path: string, body: TBody, options: { headers: { [key in string]: string; }; }): Promise<{ data: any; }> {
        throw new Error("Method not implemented.");
    }
}