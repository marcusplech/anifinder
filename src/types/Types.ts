export interface ICard {
    attributes: {
        episodeCount: number;
        slug: string;
        totalLength: number;
        canonicalTitle: string
        averageRating: string;
        ageRatingGuide: string;
        subtype: string;
        status: string;
        posterImage: {
            small: string;
        }
    }
}

export interface IFetch {
    data: ICard[]
}