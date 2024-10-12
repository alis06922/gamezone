import platforms from "../data/platforms";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string
}


// const userPlatforms = () => useData<Platform>("/platforms/lists/parents")
const userPlatforms = () => ({ data: platforms, error: null })

export default userPlatforms