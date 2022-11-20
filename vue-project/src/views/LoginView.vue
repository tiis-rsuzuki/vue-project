<template>
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    <v-card>
        <form v-on:submit.prevent="login">
        <v-card-title>
          <span class="text-h5">SMIL Project</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="user.userId"
                  label="UserId*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="user.password"
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            type="submit">Sign In
          </v-btn>
        </v-card-actions>
        </form>
    </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      dialog: true,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("auth", {
        userId: this.user.userId,
        userToken: 'dummy token'
      });
      this.$router.push(this.$route.query.redirect);
      this.dialog = false
    }
  }
};
</script>