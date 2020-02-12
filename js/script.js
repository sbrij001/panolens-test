const container = document.getElementById('container')

const panorama = new PANOLENS.ImagePanorama('../assets/images/49479880741_806baa3828_o.jpg');
const panorama2 = new PANOLENS.ImagePanorama('../assets/images/36499415834_44c18602cf_o.jpg');

// viewers I am assuming is where the panoramas will be viewed 
const viewer = new PANOLENS.Viewer({container:container});
viewer.add(panorama, panorama2);

// add infospots 
const infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -8000);
infospot.addHoverText("Click to view another image", 40);

const anotherInfospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
anotherInfospot.position.set(0, -3000, -2000);
anotherInfospot.addHoverText('MINDY U ROCK', 40);

panorama.add(infospot, anotherInfospot);

// once the user clicks they will be taken to another image
infospot.addEventListener('click', function () {
    viewer.setPanorama(panorama2);
});

