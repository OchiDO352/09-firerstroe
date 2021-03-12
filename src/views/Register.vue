<template>
  <div class="register">
    <b-container>
     <b-card bg-variant="light" text-variant="black" title="กรอกข้อมูล">
       
        <b-form @submit="onSubmit" v-if="show">
        
            <b-col cols="12">
              <b-form-group label="Email" label-for="input-1">
                <b-form-input v-model="email" type="email"  required></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-form-group label="Password" label-for="input-1">
                <b-form-input v-model="pass" type="password"  required></b-form-input>
              </b-form-group>
            </b-col>
    

          
            <b-col cols="12">
              <b-form-group id="input-group-2" label="ชื่อ" label-for="input-2">
                <b-form-input v-model="name"  required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group label="นามสกุล" label-for="input-2">
                <b-form-input v-model="surname"  required></b-form-input>
              </b-form-group>
            </b-col>
          

          
            <b-col cols="12">
              <b-form-group label="Phone" label-for="input-3">
                <b-form-input v-model="phone"  type="tel" required></b-form-input>
              </b-form-group>
            </b-col>
        

          <br>
          <b-button variant="primary" @click="addData()" v-on:click="$store.state.say(' ระบบได้ทำการเก็บข้อมูลของท่านแล้ว')" > ยืนยัน </b-button>
        </b-form>

      </b-card>
    </b-container>
  </div>
</template>

<script>
export const db = firebase.firestore();
import firebase from "firebase/app";
export default {
  data () {
    return {
      data:[],
      show: true,
    };
  },
  methods: {
    addData() {
      const data = {
        Email: this.email,
        Password: this.pass,
        First_Name: this.name,
        Last_Name: this.surname,
        Phone: this.phone,
        
      };
      db.collection('User')
        .doc('infouser')
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> User');
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
        });
      const dataText = {
        Email: this.email,
        Password: this.pass,
        First_Name: this.name,
        Last_Name: this.surname,
        Phone: this.phone,
        
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection('MyText')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText');
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
        });
    },
    reset() {},
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
*{
  font-family: "Prompt", sans-serif;
}
</style>