let url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f1cb90c955466a68f4c512efaf1ca2de';

async function obtenerClima() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.clear();
    console.log(new Date().toLocaleTimeString());
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
  }
}

setInterval(obtenerClima, 100000);
obtenerClima();
