// place files you want to import through the `$lib` alias in this folder.
export function createSlugFromPath(path) {
  return path.match(/([\w-]+)\.(md|svx)/i)?.[1] ?? null;
}
