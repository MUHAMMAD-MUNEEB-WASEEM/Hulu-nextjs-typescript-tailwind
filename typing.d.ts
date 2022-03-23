export interface ApiResults {
    results: Array,
}

export interface HItem {
    title:string,
    Icon: any,
}

export interface Result{
    result:object,
}


export interface ThumbnailResult{
    result: {
        backdrop_path: string,
        poster_path:string,
        overview:string,
        media_type: any,
        first_air_date:any,
        release_date:string,
        vote_count:number,
        title:string,
        original_name:any,

    }
}