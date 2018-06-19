import Vue from 'vue'

Vue.use({
    install(_vue) {
        _vue.prototype.$getPhotoUrl = function(place, maxWidth = 200) {
            const apiKey = 'AIzaSyAk4zHiqfz6h0arlrOEjvYEVSFJkotawiE'
            const backup = 'https://s15.postimg.cc/qsnfwkqjv/default-sport-places.jpg'
            const ref = place.properties.activities[0].photo_reference
            return ref
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${ref}&key=${apiKey}`
                : backup
        }
    }
})
