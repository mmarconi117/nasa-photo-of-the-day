import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";

import NasaPhoto from "./Components/nasaPhoto";



const dummyData = {
date: "2023-06-01",
explanation: "Massive stars in our Milky Way Galaxy live spectacular lives.  Collapsing from vast cosmic clouds, their nuclear furnaces ignite and create heavy elements in their cores. After a few million years, the enriched material is blasted back into interstellar space where star formation can begin anew. The expanding debris cloud known as Cassiopeia A is an example of this final phase of the stellar life cycle. Light from the explosion which created this supernova remnant would have been first seen in planet Earth's sky about 350 years ago, although it took that light about 11,000 years to reach us. This false-color image, composed of X-ray and optical image data from the Chandra X-ray Observatory and Hubble Space Telescope, shows the still hot filaments and knots in the remnant. It spans about 30 light-years at the estimated distance of Cassiopeia A. High-energy X-ray emission from specific elements has been color coded, silicon in red, sulfur in yellow, calcium in green and iron in purple, to help astronomers explore the recycling of our galaxy's star stuff. Still expanding, the outer blast wave is seen in blue hues. The bright speck near the center is a neutron star, the incredibly dense, collapsed remains of the massive stellar core.",
hdurl: "https://apod.nasa.gov/apod/image/2306/Chandrafirstlight_0.jpg",
title: "Recycling Cassiopeia A"
}

function App() {
  const [data, setData] = useState(dummyData);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        // console.log(res)
        setData(res.data)
      })
        .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
     { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;



//https://api.nasa.gov/planetary/apod
