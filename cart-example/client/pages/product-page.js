const ProductPageComponent = {

    template: `
      <div class="row">
        <product

        ></product>
      </div>
    `,
    created(){
      http.get('/rest/products').then((data)=>{
      }).catch((error) =>{
        console.error(error);
      });
    } 
  }