// function toggleMode(){
//     const html = document.documentElement;

//     html.classList.toggle('light')
// }

let button = document.querySelector('#switch');

button.onclick=()=>{
    const html = document.documentElement;
    let photo = document.querySelector('#profile img')
    html.classList.toggle('light')

    if(html.classList.contains('light')){
        photo.setAttribute('src', './assets/avatar-light-glass.png')
        //photo.src = './assets/avatar-light-glass.png'
    } else{
        photo.setAttribute('src', './assets/avatar.png')
        //photo.src = './assets/avatar.png'
    }
}


