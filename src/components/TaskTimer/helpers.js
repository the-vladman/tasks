// convert ms to seconds
const multi = 1000 * 1;

const convert = value => Date.now() + multi * value;

const msToTime = duration => {
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds;
  };

  export {
      multi,
      convert,
      msToTime,
  };