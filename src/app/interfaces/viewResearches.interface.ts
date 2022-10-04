export interface publishedVolume{
    id ?: string,
    researchGroupNames?:[{
        id?: string,
        researches?: [
            {
                title?: string,
                pages?: string,
                summary?: string,
                basicWords?: string,
                researchers?: [
                    {
                    researcherName?: string
                    }
                ],
                researchfile?: string
            }
        ]
    }]
}

export interface researchgroupNames{
        id?: string,
        researches?: [
            {
                title?: string,
                pages?: string,
                summary?: string,
                basicWords?: string,
                researchers?: [
                    {
                    researcherName?: string
                    }
                ],
                researchfile?: string
            }
        ]
}


export interface research{
    research ?: {
            title?: string,
            pages?: string,
            summary?: string,
            basicWords?: string,
            researchers?: [
                {
                researcherName?: string
                }
            ],
            researchfile?: string
        }
}
