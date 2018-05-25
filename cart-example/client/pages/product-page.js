const ProductPageComponent = {

    template: `
      <div class="row">
        <product

        ></product>
      </div>
    `,
    created(){
      http.get('/rest/products').then((data)=>{
        console.log(data);
      }).catch((error) =>{
        console.error(error);
      });
    } 
  }