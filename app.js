const url = './data.php';
let params = (new URL(document.location)).searchParams;

get(url, function(data) {
    resp = JSON.parse(data);
    if(params.get('imageId')){
        getData()
    } else {
        setData(data);
    }
    latestComic = parseInt(resp.num);
});

function setData(resp) {
    const data = JSON.parse(resp)
    document.getElementById("comicImg");
    comicImg.src= data.img;
    document.getElementById("title");
    title.innerHTML= data.title;
    currentComic = parseInt(data.num);
    document.getElementById("date");
    let createdOn = data.day + "/" + data.month + "/" + data.year;
    date.innerHTML = "<b>This comic was created on: </b>" + createdOn;
}

function getNxt() {
    let newInt = currentComic + 1;
    if (newInt > latestComic) {
        alert('This the latest commic')
    }
    else{
        params.set('imageId',newInt)
        getData()
    } 
}

function getRnd(){
    let newInt = Math.floor(Math.random() * latestComic); 
    params.set('imageId', newInt)
    getData()
}

function getPrv() {
    let newInt = currentComic - 1;
    if (newInt < 0) {
        alert('This earliest commic')
    }
    else{
        params.set('imageId', newInt)
        getData()
    }
}

function getData() {
    get(getURL(params.get('imageId')),  function(data){
        setData(data);
    });
}

function getURL(id){
    return url+'?id='+id;
}

function get(url, callback) 
{
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var data = xmlhttp.responseText;
        }
        callback(data);
    };
 
    xmlhttp.open("GET",url, true);
    xmlhttp.send();
}