<template>
    <div style="padding: 20px;" v-else>
        <div class="row">
            <div class="col-md-6" v-for="player in players">

                <div v-if="player.ready" class="alert alert-primary" role="alert">
                    Spiller {{ player.name }}
                </div>

                <h5>{{ player.placeholder }}</h5>
                <div class="form-group">
                    <label class="form-control-label">{{ player.placeholder }} navn</label>
                    <input :disabled="player.ready" @keyup.enter="player.ready = true" type="text" class="form-control" v-model="player.name">
                    <br>
                    <button v-if="!player.ready" class="btn btn-primary" @click="player.ready = true">Klar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            players: {
                required: true
            }
        },
        watch: {
            players: {
                handler: function (val, oldVal) {
                    let length = Object.keys(val).length
                    for (let i = 0; i < length; i++) {
                       if (!val[i].ready) {
                            return
                        }
                    }
                    this.$emit('playersSelected')
                },
                deep: true
            }
        },
        methods: {
            test () {
                console.log('test')
            }
        }
    }
</script>
