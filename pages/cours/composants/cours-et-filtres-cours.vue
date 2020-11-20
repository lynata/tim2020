<template>
    <section id="filtre">
        <button><p>Tous</p></button>
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

        button{
            font-size: 3vw;
            background-color: gray;
            color: black;
            width: 7vw;
            border-radius: 20px;
            font-family: Manrope;
        }
        // button:nth-child(1) p{
        //     font-size: 50%;
        // }
        button:hover{
            color: white;
        }
    }
</style>