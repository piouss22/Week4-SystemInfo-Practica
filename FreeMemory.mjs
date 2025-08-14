export function bytesToSize(bytes) {
  const units = ['B','KB','MB','GB','TB'];
  if (bytes <= 0) return '0 B';
  const i = Math.min(Math.floor(Math.log(bytes)/Math.log(1024)), units.length-1);
  const val = bytes / Math.pow(1024, i);
  return `${i === 0 ? Math.round(val) : val.toFixed(2)} ${units[i]}`;
}
