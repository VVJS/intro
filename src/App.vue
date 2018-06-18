<template>
    <v-app>
        <v-navigation-drawer persistent v-model="drawer" fixed app>
            <v-list>
                <v-list-tile value="true" v-for="(item, i) in items" :key="i">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.title }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                {{ title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            drawer: true,
            items: [
                {
                    icon: 'bubble_chart',
                    title: 'Inspire'
                }
            ],
            title: 'Vuetify.js'
        }
    }
}
</script>
