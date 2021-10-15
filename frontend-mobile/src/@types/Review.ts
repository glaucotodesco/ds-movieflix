import { User } from "./User";

export type Review = {
    id ?: number;
    movieId ?: number;
    text ?: string;
    user ?: User;
}