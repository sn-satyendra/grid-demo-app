export function friendlyNumber(number) {
  const value = parseInt(number, 10);
  if (isNaN(value)) return "";
  const absoluteValue = Math.abs(value);
  if (absoluteValue < 1e3) return value; // 0, 23, 364
  if (absoluteValue < 1e4) return ((value/1e3).toFixed(2) + " K"); // 1,24K 8,57K
  if (absoluteValue < 1e5) return ((value/1e3).toFixed(1) + " K"); // 1,24K 8,57K
  if (absoluteValue < 1e6) return ((value/1e3).toFixed(0) + " K");
  if (absoluteValue < 1e7) return ((value/1e6).toFixed(2) + " M");
  if (absoluteValue < 1e8) return ((value/1e6).toFixed(1) + " M");
  if (absoluteValue < 1e9) return ((value/1e6).toFixed(0) + " M");
  if (absoluteValue < 1e10) return ((value/1e9).toFixed(2) + " B");
  if (absoluteValue < 1e11) return ((value/1e9).toFixed(1) + " B");
  return (value/1e9).toFixed(0) + " B";
}
