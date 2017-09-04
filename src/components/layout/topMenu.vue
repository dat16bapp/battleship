<template>
    <div style="margin-bottom: 20px;">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" :to="{ name: 'Game' }">ReBapp</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Game' }" class="nav-link">Spil nu</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Rules' }" class="nav-link">Regler</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
