export interface Astroid{
    astroid:{
        name:string,
        nasa_jpl_url:string,
        is_potentially_hazardous_asteroid:string
    }
}

export type AstroidAction={
    type:string
    payload:Astroid
}