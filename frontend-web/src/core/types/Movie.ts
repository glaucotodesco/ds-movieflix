import { Review } from "./Review";

export type Movie = {
        id: number;
        title: string;
        subTitle: string;
        year: number;
        imgUrl: string;
        synoposis: string;
        genreId: number,
        reviews: Review[];
}

