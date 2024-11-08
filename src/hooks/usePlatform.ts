import userPlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = userPlatforms();
  return platforms?.results.find((p) => p.id == id);
};

export default usePlatform;
