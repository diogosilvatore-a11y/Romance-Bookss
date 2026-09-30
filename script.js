const livros = [

    /* ROMANCE */

    {
        titulo: "Amor, Teoricamente",
        autor: "Ali Hazelwood",
        categoria: "Romance",
        avaliacao: "★★★★★",

        capa: "imagens/1.jpg",

        descricao: "Uma comédia romântica envolvendo física, rivalidade acadêmica e sentimentos inesperados."
    },

    {
        titulo: "Leitura de Verão",
        autor: "Emily Henry",
        categoria: "Romance",
        avaliacao: "★★★★★",

        capa: "imagens/2.jpg",

        descricao: "Dois escritores fazem um desafio de trocar de gênero durante as férias."
    },

    {
        titulo: "Teto Para Dois",
        autor: "Beth O'Leary",
        categoria: "Romance",
        avaliacao: "★★★★★",

        capa: "imagens/3.jpg",

        descricao: "Dois estranhos dividem o mesmo apartamento e começam a se comunicar por post-its."
    },

    {
        titulo: "Farsa de Amor na Espanha",
        autor: "Elena Armas",
        categoria: "Romance",
        avaliacao: "★★★★☆",

        capa: "imagens/4.jpg",

        descricao: "Um namoro de mentira para um casamento na Espanha começa a ficar complicado."
    },

    {
        titulo: "Amor em Manhattan",
        autor: "Sarah Morgan",
        categoria: "Romance",
        avaliacao: "★★★★☆",

        capa: "imagens/5.jpg",

        descricao: "Uma história sobre recomeços, amizade e romance em Nova York."
    },

    {
        titulo: "Loucos por Livros",
        autor: "Emily Henry",
        categoria: "Romance",
        avaliacao: "★★★★★",

        capa: "imagens/6.jpg",

        descricao: "Uma agente literária e um editor rival se encontram repetidamente em uma pequena cidade."
    },


    /* ROMANCE JOVEM */

    {
        titulo: "É Assim Que Começa",
        autor: "Colleen Hoover",
        categoria: "Romance Jovem",
        avaliacao: "★★★★★",

        capa: "imagens/7.jpg",

        descricao: "A continuação de É Assim Que Acaba, acompanhando Atlas e uma nova oportunidade de recomeço."
    },

    {
        titulo: "Novembro, 9",
        autor: "Colleen Hoover",
        categoria: "Romance Jovem",
        avaliacao: "★★★★☆",

        capa: "imagens/8.jpg",

        descricao: "Um casal promete se encontrar na mesma data todos os anos."
    },

    {
        titulo: "O Lado Feio do Amor",
        autor: "Colleen Hoover",
        categoria: "Romance Jovem",
        avaliacao: "★★★★★",

        capa: "imagens/9.jpg",

        descricao: "Uma relação marcada por atração e regras sobre passado e futuro."
    },

    {
        titulo: "Mil Beijos de Garoto",
        autor: "Tillie Cole",
        categoria: "Romance Jovem",
        avaliacao: "★★★★★",

        capa: "imagens/10.jpg",

        descricao: "Uma história emocional sobre amor de infância e a passagem do tempo."
    },

    {
        titulo: "Pessoas Normais",
        autor: "Sally Rooney",
        categoria: "Romance Jovem",
        avaliacao: "★★★★☆",

        capa: "imagens/11.jpg",

        descricao: "A relação complexa entre dois jovens ao longo dos anos."
    },


    /* ROMANCE ESPORTIVO */

    {
        titulo: "O Erro",
        autor: "Elle Kennedy",
        categoria: "Romance Esportivo",
        avaliacao: "★★★★★",

        capa: "imagens/12.jpg",

        descricao: "John Logan tenta corrigir seus erros enquanto se aproxima de uma caloura."
    },

    {
        titulo: "O Jogo(Off_Campus)"
        ,
        autor: "Elle Kennedy",
        categoria: "Romance Esportivo",
        avaliacao: "★★★★☆",

        capa: "imagens/13.jpg",

        descricao: "Hóquei universitário, química e provocações."
    },

    {
        titulo: "Quebrando o Gelo",
        autor: "Hannah Grace",
        categoria: "Romance Esportivo",
        avaliacao: "★★★★★",

        capa: "imagens/14.jpg",

        descricao: "Uma patinadora artística e o capitão do time de hóquei precisam dividir o mesmo espaço."
    },

    {
        titulo: "Wildfire",
        autor: "Hannah Grace",
        categoria: "Romance Esportivo",
        avaliacao: "★★★★☆",

        capa: "imagens/15.jpg",

        descricao: "Dois conselheiros de acampamento tentam resistir à atração entre eles."
    },

    {
        titulo: "Powerless",
        autor: "Elsie Silver",
        categoria: "Romance Esportivo",
        avaliacao: "★★★★☆",

        capa: "imagens/16.jpg",

        descricao: "Um romance de cidade pequena envolvendo amizade, rodeios e sentimentos."
    },


    /* FANTASIA ROMÂNTICA */

    {
        titulo: "Corte de Espinhos e Rosas",
        autor: "Sarah J. Maas",
        categoria: "Fantasia Romântica",
        avaliacao: "★★★★★",

        capa: "imagens/17.jpg",

        descricao: "Feyre entra em um mundo de feéricos, magia, perigos e romance."
    },

    {
        titulo: "Corte de Névoa e Fúria",
        autor: "Sarah J. Maas",
        categoria: "Fantasia Romântica",
        avaliacao: "★★★★★",

        capa: "imagens/18.jpg",

        descricao: "A continuação da jornada de Feyre com novos desafios e personagens."
    },

    {
        titulo: "Quarta Asa",
        autor: "Rebecca Yarros",
        categoria: "Fantasia Romântica",
        avaliacao: "★★★★★",

        capa: "imagens/19.jpg",

        descricao: "Dragões, treinamento militar, perigo e uma relação cheia de tensão."
    },

    {
        titulo: "De Sangue e Cinzas",
        autor: "Jennifer L. Armentrout",
        categoria: "Fantasia Romântica",
        avaliacao: "★★★★☆",

        capa: "imagens/20.jpg",

        descricao: "Uma jovem escolhida pelos deuses começa a questionar tudo ao conhecer seu guarda."
    },

    {
        titulo: "Príncipe Cruel",
        autor: "Holly Black",
        categoria: "Fantasia Romântica",
        avaliacao: "★★★★★",

        capa: "imagens/21.jpg",

        descricao: "Intrigas políticas, mundo feérico e uma relação marcada por rivalidade."
    },


    /* ROMANCE HISTÓRICO */

    {
        titulo: "O Duque e Eu",
        autor: "Julia Quinn",
        categoria: "Romance Histórico",
        avaliacao: "★★★★★",

        capa: "imagens/22.jpg",

        descricao: "O romance que deu origem à série Bridgerton."
    },

    {
        titulo: "Os Sete Maridos de Evelyn Hugo",
        autor: "Taylor Jenkins Reid",
        categoria: "Romance Histórico",
        avaliacao: "★★★★★",

        capa: "imagens/23.jpg",

        descricao: "A história de uma lendária estrela de Hollywood e dos amores que marcaram sua vida."
    },

    {
        titulo: "Amor de Redenção",
        autor: "Francine Rivers",
        categoria: "Romance Histórico",
        avaliacao: "★★★★★",

        capa: "imagens/24.jpg",

        descricao: "Um romance histórico ambientado durante a Corrida do Ouro na Califórnia."
    },

    {
        titulo: "Circe",
        autor: "Madeline Miller",
        categoria: "Romance Histórico",
        avaliacao: "★★★★★",

        capa: "imagens/25.jpg",

        descricao: "Uma releitura da mitologia grega acompanhando a jornada da deusa Circe."
    }

];


const container = document.getElementById("livros");

const pesquisa = document.getElementById("pesquisa");

const contador = document.getElementById("contador");

const botoes = document.querySelectorAll(".filtro");

let categoriaAtual = "Todos";


function criarCard(livro) {

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
        <img
            class="capa"
            src="${livro.capa}"
            alt="Capa do livro ${livro.titulo}"
            onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80'"
        >

        <div class="card-content">

            <div class="card-categoria">
                ${livro.categoria}
            </div>

            <h3>
                ${livro.titulo}
            </h3>

            <p class="autor">
                ${livro.autor}
            </p>

            <div class="avaliacao">
                ${livro.avaliacao}
            </div>

            <p class="descricao">
                ${livro.descricao}
            </p>

        </div>
    `;

    return card;
}


function mostrarLivros() {

    const texto = pesquisa.value
        .toLowerCase()
        .trim();


    const filtrados = livros.filter(function (livro) {

        const pertenceCategoria =
            categoriaAtual === "Todos" ||
            livro.categoria === categoriaAtual;


        const correspondePesquisa =
            livro.titulo
                .toLowerCase()
                .includes(texto) ||

            livro.autor
                .toLowerCase()
                .includes(texto);


        return pertenceCategoria &&
            correspondePesquisa;

    });


    container.innerHTML = "";


    if (filtrados.length === 0) {

        container.innerHTML = `
            <div class="sem-resultados">
                Nenhum livro encontrado.
            </div>
        `;

    } else {

        filtrados.forEach(function (livro) {

            container.appendChild(
                criarCard(livro)
            );

        });

    }


    contador.textContent =
        `${filtrados.length} livro(s) encontrado(s)`;
}


botoes.forEach(function (botao) {

    botao.addEventListener(
        "click",
        function () {

            botoes.forEach(function (item) {

                item.classList.remove("ativo");

            });


            botao.classList.add("ativo");


            categoriaAtual =
                botao.dataset.categoria;


            mostrarLivros();

        }
    );

});


pesquisa.addEventListener(
    "input",
    function () {

        mostrarLivros();

    }
);


mostrarLivros();