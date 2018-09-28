# Embeddable map

## Available query params

The options available for the embed version are:
- coordinates={x,y,z} || { west, north, east, south }
- orientation=heading,pitch,roll
- activeLayers=layer1,layer2

So for example:
```
/(map|v2)?coordinates[x]=-2300162.524459119&coordinates[y]=-13745229.246067157&coordinates[z]&layer=mammals-rarity
```
will load only the globe and leyend on the desired position with the mammals rarity layer enabled.

### Layers available
- prioritization-of-places-{n} // Where n is the value of prioritization from 15 to 50
- south-africa-protected-areas
- community-based-conservation-areas
- private-reserves
- human-pressures
- protected-areas
- Species layers: combine any of the following species with the layer type, separated by a dash (e.g.: mammals-richness):
  - Species:
    - mammals, amphibians, birds, protea, restio, cacti, conifers, turtles, all-taxa
  - Types:
    - richness, rarity, richness_1km, rarity_1km

### Layers available v2
- GET https://half-earth.carto.com/api/v2/sql?q=SELECT slug FROM layers ORDER BY name


## Interacting with the iframe

There is another query param called `listeners` that includes [postRobot](https://github.com/krakenjs/post-robot#parent-to-popup-messaging) listeners. This way we can handle the iframed version of the globe from parent containers.

Public API:
- Embed the globe:
`<iframe id="map-iframe" src="http://localhost:8080/map?listeners=true" />`
- Embed the globe for v2
`<iframe id="map-iframe" src="http://localhost:8080/?sidebar=false&listeners=true" />`

- Fly to using `mapFlyToCoordinates`:
```js
postRobot.send(document.getElementById('map-iframe'), 'mapFlyToCoordinates', {
  coordinates: { x: 5760629.535260948, y: 2406368.791758723, z: -2400118.3266120856 },
  orientation: [5.92122801224943, -0.29198679662794125, 6.26520814284261]
}
```
- Toggle layers using `setMapLayers`:
```js
postRobot.send(document.getElementById('map-iframe'), 'setMapLayers',{
  layers: [slugs]
}
```

Example available in `/app/examples/iframe-controlled-map.html`
