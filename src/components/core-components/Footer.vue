<template>
  <div >
    <svg height="80" width="100%" style="margin-bottom:-7px"  >
      <polygon points="0,80 1300,80 1300,0" class="polygon body-bg" />
    </svg>
<!--     <svg height="50" width="100%" style="margin-bottom:-7px" >
      <polygon points="0,50 0,0 1300,50" style="fill:#263238;stroke:purple;stroke-width:0" />
    </svg>
  -->
  <v-footer  padless class="body-bg" >
    <v-card flat tile class="blue-grey darken-4 white--text text-center" >
      <v-card-text data-aos="slide-up">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0" data-aos="slide-up">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
      'mdi-facebook',
      'mdi-github',
      'mdi-linkedin',
      'mdi-instagram',
      ],
    }),
  }
</script>

