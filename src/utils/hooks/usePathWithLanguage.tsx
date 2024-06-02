export const editedPathName = (pathName: string, path: string) => {
  if (pathName !== "/") {
    return pathName + path;
  }

  return path;
};
