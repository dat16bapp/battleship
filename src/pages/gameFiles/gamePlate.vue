<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="floor-container" v-on-clickaway="notSelected">
                    <div class="floor-inner">
                        <div v-if="!playersShipPlaced" class="floor-child"
                             v-for="i in size"
                             @mouseover="mouseOverHover(i)"
                             @click="mouseOverAdd(i)"
                            :class="{'ship-hover': inHoverArray(i), 'ship': inShipsArray(i)}">
                            <h5>{{i}}</h5>
                        </div>
                        <div v-if="playersShipPlaced" class="floor-child"
                            v-for="i in size"
                            :class="{'ship-hover': inHoverArray(i), 'ship': inShipsArray(i)}">
                            <h5>{{i}}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4" v-if="playersShipPlaced">
                <div class="card" v-for="player in players">
                    <div class="card-body">
                        <h4 class="card-title">{{ player.name }}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">point: {{ player.points }}</h6>

                        <p>
                            {{ player.ships.length }} skibe
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4" v-else>
                <h1>Spiller {{ players[currentTurn].name }} sæt dine skibe</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .active p{
        color:white;
    }
    .card {
        margin-bottom: 20px;
    }
    .ship-hover {
        background-color: #19B5FE;
        color: white;
    }
    .ship {
        color:white;
        background-color: #2C3E50;
    }
    .floor-container {
        width: 600px;
        overflow-x: hidden;
        margin: auto;
    }
    .floor-inner {
        overflow: hidden;
    }
    .floor-child {
        width: 60px;
        height: 60px;
        float: left;
        border: 1px solid #000;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        outline: none !important;
    }
    .show-grid {
        /*border: 1px solid #000;*/
        border: 1px solid transparent;
    }
</style>

<script>
    import { mixin as clickaway } from 'vue-clickaway'

    export default {
        props: {
            players: {
                required: true
            }
        },
        mixins: [ clickaway ],
        data () {
            return {
                x: 10,
                y: 10,
                size: 0,
                hover: [],
                ships: [],
                currentTurn: 0,
                shipSize: 1,
                playersShipPlaced: false
            }
        },
        computed: {
            turn: function () {
                return 10
            }
        },
        created () {
            this.setSize()
        },
        methods: {
            notSelected () {
                this.hover = []
            },
            setSize () {
                this.size = this.y * this.x
            },
            mouseOverAdd (j) {
                if (this.players[this.currentTurn].ships.length > 10) {
                    this.currentTurn++
                    if (this.players[this.currentTurn]) {
                        this.players[this.currentTurn].ships = []
                    }
                    if (this.players[this.currentTurn] === undefined) {
                        this.currentTurn = 0
                        this.playersShipPlaced = true
                    }
                }
                for (let i = j; i < j + 2; i++) {
                    if (!this.inShipsArray(i)) {
                        this.players[this.currentTurn].ships.push(i)
                    }
                }
            },
            mouseOverHover (j) {
                this.hover = []
                for (let i = j; i < j + 2; i++) {
                    if (!this.inHoverArray(i)) {
                        this.hover.push(i)
                    }
                }
            },
            inShipsArray (i) {
                if (!this.players[this.currentTurn]) {
                    return false
                }
                if (this.players[this.currentTurn].ships.indexOf(i) !== -1) {
                    return true
                }
            },
            inHoverArray (i) {
                if (this.hover.indexOf(i) !== -1) {
                    return true
                }
            }
        }
    }
</script>
