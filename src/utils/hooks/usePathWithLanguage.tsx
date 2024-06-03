export const editedPathName = (pathName: string, path: string) => {
  const splitPathNames = pathName.split("/");
  const languageFindIndex = splitPathNames.findIndex((i) => i.length === 2);

  if (languageFindIndex !== -1)
    return `/${splitPathNames[languageFindIndex]}${path}`;
  return path;
};
