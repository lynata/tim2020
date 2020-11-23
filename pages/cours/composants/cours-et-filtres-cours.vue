<template>
    <section id="filtre">
        <button>Tous</button>
        <button><i class="fas fa-palette"></i></button> <!-- art -->
        <button><i class="fas fa-pencil-ruler"></i></button> <!-- design -->
        <button><i class="fas fa-code"></i></button> <!-- prog -->
        <button><i class="fas fa-gamepad"></i></button> <!-- jeu -->
        <button><i class="fas fa-user-tie"></i></button> <!-- profess -->
    </section>
</template>

<style lang="scss" scoped>
    #filtre{
        background-color: #101832;
        display: flex;
        justify-content: center;
        button{
            font-size: 2vw;
            background-color: rgb(209, 209, 209);
            color: black;
            width: 5vw;
            border-radius: 15px;
            margin: 0 1vw;
        }
        button:nth-child(1){
            font-size: 1.8vw;
            font-family: Manrope;
        }
        button:hover{
            color: #2cd9ff;
        }
    }
</style>