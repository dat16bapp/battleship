<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h1>{{turn}}</h1>
                <div class="floor-container">
                    <div class="floor-inner">
                        <div class="floor-child"
                             v-for="i in size"
                             @mouseover="mouseOverHover(i)"
                             @click="mouseOverAdd(i)"
                            :class="{'ship-hover': inHoverArray(i), 'ship': inShipsArray(i)}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .active p{
        color:white;
    }
    .ship-hover {
        background-color: rgba(255, 0, 0, 0.2);
    }
    .ship {
        background-color: black;
    }
    .floor-container {
        width: 500px;
        overflow-x: hidden;
        margin: auto;
    }
    .floor-inner {
        overflow: hidden;
    }
    .floor-child {
        width: 50px;
        height: 50px;
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
    export default {
        data () {
            return {
                x: 10,
                y: 10,
                size: 0,
                hover: [],
                ships: [],
                currentTurn: {}
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
            setSize () {
                this.size = this.y * this.x
            },
            mouseOverAdd (j) {
                for (let i = j; i < j + 3; i++) {
                    if (!this.inShipsArray(i)) {
                        this.ships.push(i)
                    }
                }
            },
            mouseOverHover (j) {
                this.hover = []
                for (let i = j; i < j + 3; i++) {
                    if (!this.inHoverArray(i)) {
                        this.hover.push(i)
                    }
                }
            },
            inShipsArray (i) {
                if (this.ships.indexOf(i) !== -1) {
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
