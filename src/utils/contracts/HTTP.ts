type Options = {
    headers: {[key in string]: string}
}

type Response<R = any> = {
    data: R
}

export interface HTTP {
    get(path: string, options: Options): Promise<Response>;
    post<TBody>(path: string, body: TBody, options: Options): Promise<Response>;
    put<TBody>(path: string, body: TBody, options: Options): Promise<Response>;
    patch<TBody>(path: string, body: TBody, options: Options): Promise<Response>;
    delete<TBody>(path: string, body: TBody, options: Options): Promise<Response>;
}