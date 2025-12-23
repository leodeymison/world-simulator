export type ConfigHttp = {
    headers: {[key in string]: string}
}

export type ResponseHttp<R = any> = {
    data: R
}

export interface HTTP {
    get(path: string, config?: ConfigHttp): Promise<ResponseHttp>;
    post<TBody>(path: string, body: TBody, config?: ConfigHttp): Promise<ResponseHttp>;
    put<TBody>(path: string, body: TBody, config?: ConfigHttp): Promise<ResponseHttp>;
    patch<TBody>(path: string, body: TBody, config?: ConfigHttp): Promise<ResponseHttp>;
    delete<TBody>(path: string, config?: ConfigHttp): Promise<ResponseHttp>;
}