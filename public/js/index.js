ShopifyApp.ready(function(){
  ShopifyApp.Bar.loadingOff();
  
  ShopifyApp.Modal.alert('App ready!', function(result) {
    console.log('app ready result =', result);
  });

  var btn = document.getElementById('button');
  btn.addEventListener('click', function(e) {
    ShopifyApp.Modal.productPicker({}, function(success, data) {
      if (success) {
        data.products.forEach(function(product){
          console.log('product type selected =', product.product_type);
        });

        ShopifyApp.flashNotice('Product selected successfully!');
      }
    });
  });
});
