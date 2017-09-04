<template>
    <div>
        <welcome-screen v-if="step === 0" @gameStarted="step = 1"></welcome-screen>
        <choose-player v-if="step === 1" :players="players" @playersSelected="step = 2"></choose-player>

        <game-plate v-if="step === 2" :players="players"></game-plate>
    </div>
</template>

<script>
    import welcomeScreen from './gameFiles/welcomeScreen.vue'
    import choosePlayer from './gameFiles/choosePlayer.vue'
    import gamePlate from './gameFiles/gamePlate.vue'
    export default {
        data () {
            return {
                step: 0,
                players: [
                    {
                        placeholder: 'Spiller 1',
                        name: null,
                        ships: [],
                        points: 0,
                        id: 1,
                        ready: false,
                        active: false
                    },
                    {
                        placeholder: 'Spiller 2',
                        name: null,
                        points: 0,
                        ships: [],
                        id: 2,
                        ready: false,
                        active: false
                    }]
            }
        },
        components: {
            welcomeScreen,
            choosePlayer,
            gamePlate
        }
    }
</script>
