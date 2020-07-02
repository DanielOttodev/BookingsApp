<template>
  <v-container class="mt-12">



      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        :src="bg"
        :app=true
        dark
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
                <v-avatar color="#FF4081">
      <span class="white--text headline">DO</span>
    </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Daniel Otto</v-list-item-title>
              <v-list-item-subtitle>Skyebook</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
       
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.path"
         
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        
      </v-navigation-drawer>

  </v-container>
</template>

<script>
  export default {
    data () {
      
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard',path:'/' },
          { title: 'Calendar', icon: 'mdi-calendar-today',path:'/calendar'},
          { title: 'Events', icon: 'mdi-bookmark-multiple',path:'/events'},
          {title: 'Clients', icon: 'mdi-account-cog',path:'/clients'},
          {title: 'Marketing', icon: 'mdi-elevation-rise',path:'/marketing'},
          {title: 'Settings', icon:"mdi-shape-plus",path:'/settings'}
          
        ],

        color: 'primary',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',
        ],
        right: false,
        miniVariant: false,
        expandOnHover: false,
        background: true,
      }
      
    },
    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
  }
</script>