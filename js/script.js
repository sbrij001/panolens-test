const container = document.querySelector('#container')
const panorama = new PANOLENS.ImagePanorama('../assets/images/49479880741_806baa3828_o.jpg');
const viewer = new PANOLENS.Viewer({container:container});
viewer.add(panorama);