<template>
    <v-flex class="px-1" xs12 md6>
        <v-list-tile :to="{ name: 'place', params: { uuid: place.properties.uuid } }" avatar>
            <v-list-tile-avatar>
                <img :src="$getPhotoUrl(place)">
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
    props: ['place']
}
</script>

<style scoped>
/deep/ .list__tile {
    background-color: white;
    margin-bottom: 8px;
}
/deep/ .list__tile:hover {
    background-color: #ffea2859;
}
</style>
