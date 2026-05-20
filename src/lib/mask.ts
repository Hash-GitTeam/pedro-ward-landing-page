export function maskPhone(value: string): string {
  let digits = value.replace(/\D/g, "");
  // Remove leading zeros
  while (digits.startsWith("0")) digits = digits.slice(1);
  digits = digits.slice(0, 11);

  const len = digits.length;
  if (len === 0) return "";
  if (len <= 2) return `(${digits}`;
  if (len <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
