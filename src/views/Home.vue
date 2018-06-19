<template>
    <v-layout class="pt-2 px-1" row wrap>
        <list-item-place :place="place" v-for="place in sportPlaces.slice(0, 20)" :key="place.properties.uuid"></list-item-place>
    </v-layout>
</template>

<script>
import axios from 'axios'
import listItemPlace from '@/components/ListItemPlace.vue'

export default {
    name: 'App',
    components: {
        listItemPlace
    },
    data() {
        return {
            sportPlaces: []
        }
    },
    async mounted() {
        const { data } = await axios.get(
            'https://sportplaces-api.herokuapp.com/api/v1/places?radius=99&origin=-73.5826985,45.5119864'
        )
        this.sportPlaces = data.data.features
    }
}
</script>