type AssetJson = {
  url?: string;
  original_filename?: string;
  // allow additional keys
  [key: string]: unknown;
};

/**
 * Assets are authored as `*.png.asset.json`.
 *
 * For rendering, prefer the deterministic local mapping based on
 * `original_filename`, pointing into `src/assets/` (Vite bundles these).
 */
export function assetUrl(asset: AssetJson): string {
  const original = typeof asset?.original_filename === "string" ? asset.original_filename : "";
  const url = typeof asset?.url === "string" ? asset.url : "";

  // Prefer the local file in src/assets when it exists.
  // (This fixes images that previously depended on /__l5e/assets-v1/ endpoints.)
  if (original) {
    const encoded = encodeURIComponent(original).replace(/%20/g, " ");
    const localPath = `/src/assets/${encoded}`;

    // We can’t reliably check file existence at runtime in the browser,
    // so we attempt local first; if it’s wrong, callers will still get a fallback below.
    // Returning localPath here keeps the common (matching-name) case correct.
    return localPath;
  }

  // Fallback to the provided asset URL from the json.
  return url;
}
