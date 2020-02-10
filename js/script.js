const container = document.getElementById('container')
const panorama = new PANOLENS.ImagePanorama('../assets/images/49479880741_806baa3828_o.jpg');
const viewer = new PANOLENS.Viewer({container:container});
viewer.add(panorama);

// add infospot 
const infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
infospot.addHoverText('SHIVANI U ROCK',40);

panorama.add(infospot);

