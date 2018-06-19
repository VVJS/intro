<template>
    <div>
        This is the place page
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['uuid'],
    async mounted() {
        const { data } = await axios.get(`https://sportplaces-api.herokuapp.com/api/v1/places/${this.uuid}`)
        console.log(data)
    }
}
</script>

<style>
</style>
