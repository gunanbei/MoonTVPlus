/**
 * Parse CMS JSON while preserving numeric vod_id literals as strings.
 * CMS providers may emit IDs larger than JavaScript's safe integer range.
 */
export function parseCmsJson<T>(text: string): T {
  const losslessText = text.replace(
    /(?<!\\)"vod_id"\s*:\s*(-?\d+)(?=\s*[,}])/g,
    '"vod_id":"$1"'
  );
  return JSON.parse(losslessText) as T;
}
