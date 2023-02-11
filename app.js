console.log("Let's get this party started!");

const searchBar = document.querySelector('#gif-name');  //search keyword
const picBox = document.querySelector('#picture-space');   //div for gifs to display

async function addGif(gif){     //get url and make new img element, set img src to the url, append to display div
    try{
        const newGif = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=d3zL2nNvHCOHet7BScumYB0INekbNsad&tag=${gif}&rating=g`);
        const img = document.createElement('img');
        img.src = newGif.data.data.images.original.url;
        picBox.append(img);
        
    }catch(e){
        console.log('ERROR! No gifs found for the keyword you used');      //clarify errors to user with alert
        alert('ERROR! No gifs found for the keyword you used');             
    }
}

$('form').on('submit', async function(e) {      //adding event listener for form, inputing the value in addGif then clears bar, return new gif in div
    e.preventDefault();
    let value = searchBar.value;
    addGif(value);
    searchBar.value ='';
});

$('#clear-btn').on('click', function(e) {       //adding event listener for clear button, setting displays inner html to empty
    picBox.innerHTML = '';
});