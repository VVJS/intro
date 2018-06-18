<template>
    <v-flex class="px-1" xs12 md6>
        <v-list-tile avatar>
            <v-list-tile-avatar>
                <img :src="getPhotoUrl(place)">
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title class="capitalize title">
                    {{ place.properties.name }}
                </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-flex>
</template>

<script>
export default {
    name: 'PlaceListItem',
    props: ['place'],
    methods: {
        getPhotoUrl(place) {
            const apiKey = 'AIzaSyAgGwSfZA0eGjv1-Hhncd5SZImxYbgOPb'
            const backup = 'https://hockeycommunity.com/explore/static/images/explore/outdoor-sml.jpg'
            const ref = place.properties.activities[0].photo_reference
            return ref
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${ref}&key=${apiKey}`
                : backup
        }
    }
}
</script>

<style scoped>
/deep/ .list__tile {
    border-radius: 5px;
    border: 1px solid #dfdfdf;
    margin-bottom: 8px;
}
/deep/ .list__tile:hover {
    background-color: #0082c385;
}
</style>
