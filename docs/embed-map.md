# Embeddable map

## Query params availables

The options availables for the new `/map` route are:
- coordinates=X,Y,Z
- orientation=heading,pitch,roll
- layers=layer1,layer2

So for example:
```
/map?coordinates=6117078,2713298,-4028512&layer=mammals-rarity
```
will load only the globe and leyend on the desired position with the mamals rarity layer enabled.

## Interacting with the iframe

Another query params called `listeners` is available to include [postRobot](https://github.com/krakenjs/post-robot#parent-to-popup-messaging) listeners so now we could handle the iframed version of the globe from parent containers.

Public API:
- Embed the globe:
`<iframe id="map-iframe" src="http://localhost:8080/map?listeners=true" />`

- Fly to using `mapFlyToCoordinates`:
```js
postRobot.send(document.getElementById('map-iframe'), 'mapFlyToCoordinates', {
  coordinates: [5760629.535260948, 2406368.791758723, -2400118.3266120856],
  orientation: [5.92122801224943, -0.29198679662794125, 6.26520814284261]
}
```
- Toggle layers using `setMapLayers`:
```js
postRobot.send(document.getElementById('map-iframe'), 'setMapLayers',{
  layers: [slugs]
}
```

Example available in `/public/embed-map.html`
