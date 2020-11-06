import React from 'react'

function App() {
  const randomInt = () => {
      return  Math.floor(10 * Math.random());
  }

  const canIGoOutNow = () => {
    const p1 = getWeatherForecastFromMeteo();
    const p2 = getWeatherForecastFromOnet();
    const p3 = getWeatherForecastFromGoogle();
    Promise.race([p1, p2, p3]).then(result => {
      console.log("u can go out", result[0][0] && result[1][0], "from", result[0][1]);
    }).catch(result=>{
      console.log("u cannot go out, based on", result);
    })
  }

  const getCurrentTime = (result, seconds, shouldFail, source) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(shouldFail){
          reject(source)
        }
        //console.log("time");
        resolve([result, source]);
      }, 1000*seconds)
    })
  }

  const getMyLocation = (result, seconds, source) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        //console.log("location");
        resolve([result, source]);
      }, 1000*seconds)
    })
  }

  const getWeatherForecastFromMeteo = () => {
    const p1 = getMyLocation(true, randomInt(), "meteo");
    const p2 = getCurrentTime(true, randomInt(), randomInt() > 4 ? true : false, "meteo");
    return Promise.all([p1,p2]);
  }

  const getWeatherForecastFromOnet = () => {
    const p1 = getMyLocation(true, randomInt(), "onet");
    const p2 = getCurrentTime(true, randomInt(), randomInt() > 4 ? true : false, "onet");
    return Promise.all([p1,p2]);
  }

  const getWeatherForecastFromGoogle = () => {
    const p1 = getMyLocation(true, randomInt(), "google");
    const p2 = getCurrentTime(true, randomInt(), randomInt() > 4 ? true : false, "google");
    return Promise.all([p1,p2]);
  }

  return (
    <button onClick={canIGoOutNow}>
      Click!
    </button>
  );
}

export default App;