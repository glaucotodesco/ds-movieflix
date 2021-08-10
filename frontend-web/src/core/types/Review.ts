import { User } from "./User";

export type Review = {
    id: number;
    movieId: number;
    user: User;
    text: string;
}