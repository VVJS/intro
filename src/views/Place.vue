<template>
    <v-layout class="pt-4" column align-center>
        <v-card v-if="place">
            <v-card-media :src="$getPhotoUrl(place, 600)" height="200px">
            </v-card-media>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{ place.properties.name }}</h3>
                    <div>{{ place.properties.address_components.address }}</div>
                    <div>
                        {{ suggested }}
                    </div>
                </div>
            </v-card-title>
        </v-card>
    </v-layout>
</template>

<script>
import axios from 'axios'

export default {
    props: ['uuid'],
    data() {
        return {
            place: null
        }
    },
    async mounted() {
        const { data } = await axios.get(`https://sportplaces-api.herokuapp.com/api/v1/places/${this.uuid}`)
        this.place = data
    },
    computed: {
        suggested() {
            const user = this.place.properties.user
            return `Suggested by: ${user.first_name} ${user.last_name}`
        }
    }
}
</script>

<style>
.card {
    max-width: 600px;
    width: 100%;
}
h3 {
    color: #0082c3;
    font-size: 26px;
    font-style: italic;
}
</style>
