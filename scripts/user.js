const users = [
    {
      id: 1,
      user: "Samuel Leão",
      stack: "Front end Engineer",
      img: "./assets/img/user1.svg",
      title:
        "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
      //texto do post
      text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
    },
    {
      id: 2,
      user: "Samuel Persuhn",
      stack: "Front end Engineer",
      img: "./assets/img/user2.svg",
      title:
      "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
    text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
    },
    {
      id: 3,
      user: "Carlos Lima",
      stack: "UX e UI Designer",
      img: "./assets/img/user3.svg",
      title: "O que é programação orientada a objetos e programação funcional",
      text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
    },
    {
      id: 4,
      user: "Carla Maria",
      stack: "Back end Engineer",
      img: "./assets/img/user4.svg",
      title:
      "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    //texto do post
    text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
    },
    {
      id: 5,
      user: "Júlia Martins",
      stack: "Devop's",
      img: "./assets/img/user5.svg",
      title:
      "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
    text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
    },
    {
      id: 6,
      user: "Filipe Gutierry",
      img: "./assets/img/user7.svg",
      title: "O que é programação orientada a objetos e programação funcional",
      text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
    },
    {
      id: 7,
      user: "Samuel Persuhn",
      img: "./assets/img/user6.svg",
      title: "O que é programação orientada a objetos e programação funcional",
      text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
    },
  
  ];
  
  
  // <!-- <li class="perfil-seguir">
  // <img src="./assets/img/Ellipse 1.png" alt="" />
  // <div>
  //   <h4>Samuel Leao</h4>
  //   <p>Front end Enginner</p>
  // </div>
  // <button class="button-seguir">Seguir</button> -->
  
  
  function renderPrefile (users) {
  
    let li = document.createElement('li')
    let img = document.createElement('img')
    
    let div = document.createElement('div')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let button = document.createElement('button')
  
    li.classList.add('perfil-seguir')
    img.src = users.img
    div.classList.add('divSeguir')
    h4.innerText = users.user
    p.innerText = users.stack
    button.classList.add('button-seguir')
    button.innerText = 'Seguir'
  
  
  
    div.append(h4, p)
    li.append(img, div, button)
  
    return li
  
  }
  
  let ul = document.querySelector('.ulSeguir')
  
  let listLike = (likeUsers) => {
  
    ul.innerHTML = ''
  
    likeUsers.map((element) => {
      let like = renderPrefile(element)
      ul.append(like)
      
    });
  }
  
  listLike(users)
  
  