const ProductPageComponent = {
  props: ["slice"],

  template: `
      <div class="row">
      <div v-if="!slice">
        <input type="text" v-model="search" placeholder="search products"/>
      </div>

      <h1 v-if="!slice" class="col-12">Produktsida</h1>
        <product
          v-for="product in filteredProducts"
          v-bind:item="product"
          v-bind:key="product._id"
        ></product>
      </div>
    `,
  created() {
    http
      .get("/rest/products")
      .then(response => {
        if (this.slice) {
          this.products = response.data.slice(-Number(this.slice));
        } else {
          this.products = response.data;
        }
      })
      .catch(error => {
        console.error(error);
      });
  },

  computed: {
    filteredProducts: function () {
      return this.products.filter((product) => {
        return product.name.match(this.search);
      });
    }
  },

  data() {
    return {
      products: [],
      search: ""
    };
  }
};
