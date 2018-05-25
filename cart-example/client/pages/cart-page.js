const CartPageComponent = {

  template: `
    <div class="row">
      <cart class="col-12"></cart>
      <div class="col-12">
        <lable for="first-name">Förnamn:</lable>
        <input name="first-name" v-model="firstName"></input>
        <button v-on:click="pay">Betala</button>
      </div>
    </div>
  `,
  
  data(){
    return{
      firstName: ''
    }
  },

  methods: {
    pay: ()=>{
      console.log('pay');
    }
  }
}