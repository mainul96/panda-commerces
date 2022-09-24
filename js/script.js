// all h2 tag color set lightBlue
const titles = document.getElementsByTagName('h2');
for (const title of titles ){
    title.style.color = 'lightBlue';
}
// backpack section use a background color tomato
const bagPack = document.getElementById('backpack');
bagPack.style.backgroundColor = 'tomato';

// all card class using border radius 30px

const cards = document.getElementsByClassName('card');
for (const card of cards){
    card.style.borderRadius = '25px';
}



function handel(){
    console.log('i am added function');
}


const btns = document.getElementsByClassName('panda-button');
for (const btn of btns){
    btn.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target);
    })
}


document.getElementById('input-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const btn = document.getElementById('sign-btn');
if(text === 'email'){
    btn.removeAttribute('disabled');
}else{
    btn.setAttribute('disabled', true);
}
})

const images = document.querySelectorAll('.images');
for (const image of images){
    image.addEventListener('mouseenter', function(){
        image.style.display = 'none';
    })
}


const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function(){
    subscribe.style.backgroundColor = '#CBC3E3';
})