
// Câu 1: 
// {
// async function fetchApi(){
//     const api = await fetch('https://tobitheme.net/api/characters.json');
//     return await api.json();
// }

// fetchApi()
//     .then(
//         api => {
//             let name = document.getElementsByClassName('characters__name');
//             let house = document.getElementsByClassName('characters__house');
//             let image = document.getElementsByClassName('characters__image');
//             for (let i = 0; i < api['data'].length;i++){
//                 name[i].textContent = `${api['data'][i].name}`
//                 house[i].textContent = `House: ${api['data'][i].house}`
//                 image[i].src = api['data'][i].image;
//             }
//         }
//     )
    
// }



// Câu 2:
{
    async function fetchApi(){
        const api = await fetch('https://tobitheme.net/api/characters.json');
        return await api.json();
    }
    
    fetchApi()
        .then(
            api => {
                let list = document.getElementsByClassName('characters__list');
                for (let i = 0; i < api['data'].length;i++){
                    let input = document.getElementById('characters__input');
                    list[i].innerHTML="";
                    input.addEventListener('change',()=>{
                        if(input.value ==  api['data'][i].name.toLowerCase()){
                            list[i].innerHTML = `
                            <a href="" class="characters__link">
                            <div class="characters__content">
                                <h2 class="characters__name">${api['data'][i].name}</h2>
                                <p class="characters__house">${api['data'][i].house}</p>
                            </div>
                            <div class="characters__wrap">
                                <img src="" alt="ảnh" class="characters__image">${api['data'][i].image}
                            </div>
                        </a>
                            `
                        }
                    })
                }

            }
        )
}




