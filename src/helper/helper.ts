export const convertMillisToSecond = (millisec: number) =>
  Math.floor(millisec / 1000);
export const convertMillisToMinutes = (millisec: number) =>
  Math.floor(convertMillisToSecond(millisec) / 60);
export const convertMillisToHours = (millisec: number) =>
  Math.floor(convertMillisToMinutes(millisec) / 60);

// get MODULES time
// range 1 - 60
export const modulusSecond = (millisec: number) =>
  convertMillisToSecond(millisec) % 60;
export const modulusMinutes = (millisec: number) =>
  convertMillisToMinutes(millisec) % 60;
// range 1 - 24
export const modulusHours = (millisec: number) =>
  convertMillisToHours(millisec) % 24;

type FormatTimeType = "HH:MM:SS";

const formatsTime = {
  "HH:MM:SS": (millis: number) =>
    [
      modulusHours(millis).toString().padStart(2, "0"),
      modulusMinutes(millis).toString().padStart(2, "0"),
      modulusSecond(millis).toString().padStart(2, "0"),
    ].join(":"),
};

export const getFormatTime = (millis: number, format: FormatTimeType) => {
  return formatsTime[format](millis);
};
