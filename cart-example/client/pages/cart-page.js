const CartPageComponent = {
  template: `
    <div class="row">
      <cart class="col-12"></cart>
      <div class="col-12">

        <div class="inputCart">
          <label for="first-name">Förnamn:</label>
          <input name="first-name" v-model="firstName"></input>
        </div>
        <div class="inputCart">
          <label for="last-name">Efternamn:</label>
            <input name="last-name" v-model="lastName"></input>
        </div>
        <div class="inputCart">
          <label for="street-adress">Adress:</label>
            <input name="street-adress" v-model="streetAdress"></input>
        </div>
        <button v-on:click="pay">Betala</button>
        <button v-on:click="emptyCart">Rensa kundvagn</button>
      </div>
    </div>
  `,

  data() {
    return {
      firstName: ""
    };
  },

  methods: {
    pay: () => {
      http
        .post("/rest/pay", {})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },

    emptyCart: () => {


    }
  }
};
