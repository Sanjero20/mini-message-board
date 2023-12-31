function parseISODate(ISODate: string) {
  const date = new Date(ISODate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    // timeZoneName: "short",
  };

  return date.toLocaleDateString(undefined, options);
}

export default parseISODate;
