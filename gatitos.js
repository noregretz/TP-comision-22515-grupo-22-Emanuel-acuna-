const dogbtn = document.getElementById("dogbtn");
const catbtn =  document.getElementById("catbtn");

async function getDog(){
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const data =  await resp.json();
    console.log(data);
    showdata(data.message);
}

async function getCat(){
    const resp = await fetch("https://aws.random.cat/meow");
    const data =  await resp.json();
    console.log(data);
    showdataCat(data.file);
}
getCat();

function showdataCat(catimage){
    document.getElementById("cat").innerHTML = `
    <img src="${catimage}" alt="">
    `
}
