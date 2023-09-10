export const GetTime = (date) => {
    const dt = date
    .toLocaleTimeString()
    .split(":");
  dt.pop();
  if (dt[0] > 12) {
    dt[0] = dt[0] - 12;
    var Time = "PM";
  } else {
    var Time = "AM";
  }
  return(dt.join(":") + " " + Time);
}