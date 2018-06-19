<template>
    <v-app>
        <v-navigation-drawer persistent v-model="drawer" fixed app>
            <v-list>
                <v-list-tile :to="item.url" v-for="(item, i) in items" :key="i">
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
        <v-toolbar class="primary" dark app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                {{ title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content class="column justify-center">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            drawer: false,
            items: [
                {
                    icon: 'home',
                    title: 'Home',
                    url: '/'
                }
            ],
            title: 'Intro to Vue.js'
        }
    }
}
</script>

<style>
.content {
    background-color: #ececec;
}
</style>

