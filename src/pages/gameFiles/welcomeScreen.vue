<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <img class="card-img-top" src="http://nationalinterest.org/files/styles/main_image_on_posts/public/main_images/uss_new_jersey_6219214852.jpg?itok=gO7-Wwi6" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">Velkommen til battleship</h4>
                        <p class="card-text">Dette er et projekt lavet af ReBapp med støtte fra Roland. K</p>
                        <button @click="$emit('gameStarted')" class="btn btn-primary">Start spil</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .card-img-top {
    }
</style>
