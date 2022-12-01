<template>
  <v-card class="mx-auto" max-width="444">
    <v-card-text>
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
      <p>adjective</p>
      <div class="text--primary">
        relating to or dependent on charity; charitable.<br />
        "an eleemosynary educational institution."
      </div>
    </v-card-text>
    <v-card-actions>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-row class="mx-2 mb-4" align="center" justify="space-between">
            <v-chip pill v-on="on">
              <v-avatar left>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
              John Leider +3
            </v-chip>
            <v-btn text color="teal accent-4" dark v-bind="attrs" v-on="on">
              <v-icon dark> mdi-pencil </v-icon>
            </v-btn>
          </v-row>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal first name*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="[
                      'Skiing',
                      'Ice hockey',
                      'Soccer',
                      'Basketball',
                      'Hockey',
                      'Reading',
                      'Writing',
                      'Coding',
                      'Basejump',
                    ]"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    projectName: String,
    projectDecs: String,
    deadline: String,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
