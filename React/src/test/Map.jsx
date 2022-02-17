/* global kakao */
import { Box } from 'grommet';
import React, { useEffect } from 'react'


const Location = () => {

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
  }, [])


  return (
    <Box>
      <div id="map" style={{ width: "300px", height: "300px" }}></div>
    </Box>
  )
}

export default Location;