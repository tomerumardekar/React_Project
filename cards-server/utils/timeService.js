const currentTime = () => {
  const addLeadingZero = (value) => {
    return value.toString().padStart(2, "0");
  };

  let now = new Date();
  let year = now.getFullYear();
  let month = addLeadingZero(now.getMonth() + 1);
  let day = addLeadingZero(now.getDate());
  let hour = addLeadingZero(now.getHours());
  let minute = addLeadingZero(now.getMinutes());
  let second = addLeadingZero(now.getSeconds());

  return { year, month, day, hour, minute, second };
};

console.log(currentTime());
