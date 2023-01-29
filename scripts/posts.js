


let renderPost = (users) => {

    let li = document.createElement('li')
    let divPerfil = document.createElement('div')
    let img = document.createElement('img')
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let divCard = document.createElement('div')
    let h3Card = document.createElement('h3')
    let pCard = document.createElement('p')
    let divButton = document.createElement('div')
    let button = document.createElement('button')
    let imgCoracao = document.createElement('img')
    
    
    img.src = users.img
    h3.innerText = users.user
    p.innerText = users.stack
    h3Card.innerText = users.title
    h3Card.classList.add('cardInfo')
    pCard.innerText = users.text
    pCard.classList.add('cardInfo')
    button.innerText = 'Abrir post'
    
    divPerfil.classList.add('perfil')
    divCard.classList.add('card')
    divButton.classList.add('div-buttons')
    img.classList.add('img-post')
    button.classList.add('button-openPost')
    imgCoracao.classList.add('imgCoracao')
    imgCoracao.src = './assets/img/Vector.svg'
    
    
    
    divPerfil.append(img, div)
    div.append(h3, p)
    divCard.append(h3Card, pCard)
    
    divButton.append(button,imgCoracao)
    
    li.append(divPerfil, divCard, divButton)
    
    return li
    
    }
    
    
    let ulPosts = document.querySelector('.posts')
    let listaPosts = (listarPosts) => { 
    
      ulPosts.innerHTML = ""
    
    listarPosts.forEach((element) => {
      let posts = renderPost(element)
      ulPosts.append(posts)
    
    });
    }
    listaPosts(users)