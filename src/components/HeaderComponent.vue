<script setup>
</script>

<template>
    <div class="cabecalho">
        <div class="info">
            <a href="#">
                <img src="../../public/img/Vector.png" alt="">
            </a>
            <ul>
                <li>
                    <a href="#">
                        <img src="../../public/img/Vector (1).png" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../public/img/Vector (2).png" alt="">
                    </a>
                </li>
            </ul>
        </div> 
    </div>
</template>

<style scoped>
.cabecalho {
    background-color: black;
}
    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 2vw 4vw 2vw 4vw;
    }
   ul {
    display: flex;
    justify-content: space-between;
    gap: 3vw;
   }
   ul li {
    list-style: none;
   }
   img {
    height: 1.6vw;
   }
</style>