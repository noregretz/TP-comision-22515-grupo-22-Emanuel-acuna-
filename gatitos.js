const dogbtn = document.getElementById("dogbtn");
const catbtn =  document.getElementById("catbtn");

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
