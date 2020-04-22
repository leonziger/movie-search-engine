export const cutString = (string, maxLength, tail = '...') => {
  return string.length > maxLength ? string.substring(0, maxLength) + tail : string;
};

