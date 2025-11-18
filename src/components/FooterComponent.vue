<template>
    <div class="footer">
        <div class="info">
            <div class="text">
                <div class="sobre">
                <p>Sobre</p>
                <ul>
                    <li>
                        <a href="">Equipe</a>
                    </li>
                    <li>
                        <a href="">Nossa Missão</a>
                    </li>
                </ul>
            </div>
            <div class="contato">
                <p>Contato</p>
                <ul>
                    <li>
                        <a href="">cinelatin@gmail.com</a>
                    </li>
                    <li>
                        <a href="">(47) 99900-9900</a>
                    </li>
                    <li>
                        <a href="">Araquari - SC,Brazil</a>
                    </li>
                </ul>
            </div>
            
            </div>
    <div class="social">
        <p>Redes Sociais</p>
        <ul>
            <li>
                <a href="">
                    <img src="../../public/img/instagram.png" alt="">
                </a>
            </li>
            <li>
                <a href=""><img src="../../public/img/youtube.png" alt=""></a>
            </li>
            <li>
                <a href=""><img src="../../public/img/x.png" alt=""></a>
            </li>
        </ul>
    </div>
    </div>
<hr>
    <div class="copyright">
        <p>CineLatin — explorando o cinema latino-americano.</p>
        <p> © 2025 CineLatin. Dados fornecidos por The Movie Database (TMDB).</p>
        </div>
    </div>
</template>

<style scoped>
    .footer {
        background-color: #3DF2FF;
        padding: 2vw;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding: 1vw;
        padding-left: 4vw;
        padding-right: 4vw;
    }
    .info {
        display: flex;
        justify-content: space-between;
        padding-bottom: 1vw;
    }
    .info p {
        font-weight: bold;
        font-size: 1.1rem;
    }
    ul li a {
        text-decoration: none;
        color:black ;
    }
    .social ul {
        list-style: none;
        display: flex;
    }
    .social p {
        justify-self: right;
        padding-bottom: 1vw;
        font-weight: bold;
        font-size: 1.1rem;
    }
    .social ul {
        gap: 2vw;
    }
    .social img {
        height: 2vw;
    }
    hr {
        background-color: black;
        height: 2px;
        border: none;
    }
    .copyright {
        padding-top: 1vw;
    }
    .copyright p {
        text-align: center;
    }
</style>