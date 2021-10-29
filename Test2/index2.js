// Câu 3: 

{
async function fetchApi(){
    const api = await fetch('https://tobitheme.net/api/characters.json');
    return await api.json();
}

fetchApi()
    .then(
        api => {
            let name = document.getElementsByClassName('characters__name');
            let gender = document.getElementsByClassName('characters__gender')
            let dob = document.getElementsByClassName('characters__dob')
            let ancestry = document.getElementsByClassName('characters__ancestry')
            let eyecolor = document.getElementsByClassName('characters__eyecolor')
            let haircolor = document.getElementsByClassName('characters__haircolor')
            for (let i = 0; i < api['data'].length;i++){
                name[i].textContent = `${api['data'][i].name}`
                house[i].textContent = `House: ${api['data'][i].house}`
                image[i].src = api['data'][i].image;
            }
        }
    )
    
}