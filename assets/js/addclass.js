//recuperar as imagens da galeria - todas elas têm a class gallery-item - assim que o o HTML for carregado 
// chamar uma função para trazer essas imagens
document.addEventListener('DOMContentLoaded', () =>{
    //recuperar as imagens
    const getImages = document.querySelectorAll('.gallery-item');
    console.log(getImages);

    // montar um for para percorrer o Array que foi gerado e  aplicar com um IF as classes que estão na CSS
    for(let i=0; i<getImages.length; i++){
        getImages[i].classList.add((i % 2 == 0) ? 'left-rotate' : 'right-rotate');
    }
})