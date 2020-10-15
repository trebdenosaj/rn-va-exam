import { BASE_API_URL } from "../config/main"

interface IApiParam{
    url?:string,
    body?:object
}

interface ICallParam{
    method:string,
    url:string,
    body?:object
}

enum Methods{
    GET="GET",
    POST="POST",
    PATCH="PATCH",
    DELETE="DELETE"
}

export const ApiService = {
    get: (params: IApiParam | void) : Promise<Response> => {
        return ApiCall({...setApiParameter(params), method: Methods.GET})
    },

    post: (params: IApiParam | void) => {
        return ApiCall({...setApiParameter(params), method: Methods.POST})
    },

    patch: (params: IApiParam | void) =>{
        return ApiCall({...setApiParameter(params), method: Methods.PATCH})
    },

    remove: (params: IApiParam | void) =>{
        return ApiCall({...setApiParameter(params), method: Methods.DELETE})
    }
}

const setApiParameter = (params: IApiParam | void) => {
    //Defaults to BASE_API_URL
    let callUrl = BASE_API_URL;
    let body = {};

    if(params && params.url){
        callUrl = params.url;
    }
    if(params && params.body){
        body = params.body;
    }

    return {
        url: callUrl,
        body
    };
}

const ApiCall = (params: ICallParam) => {
    let excludeBody = params.method === Methods.GET || params.method ===Methods.DELETE;

    let options =  {
        method: params.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    
    return fetch(params.url, excludeBody ? options : {...options, body: JSON.stringify(params.body)});
}