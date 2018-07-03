import Vue from 'vue'

Vue.use({
    install(_vue) {
        _vue.prototype.$getPhotoUrl = function(place) {
            return `https://s3-us-west-2.amazonaws.com/meetups.hc/VVJS/intro/${place.properties.google_place_id}.jpg`
        }
    }
})
