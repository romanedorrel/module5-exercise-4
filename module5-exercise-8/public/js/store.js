let categories = new Map();
let allProducts;
    //Fetch fake store data and call addproducts
    axios.get('/store')
    .then(response => { allProducts = response.data; loadFilteredProducts(allProducts); })// allProducts.forEach(element => addProduct(element))
    //add each product to a new card and load to page
    function addProduct(product)
    {
        let template = document.getElementById('product-template').content.cloneNode(true);
        template.querySelector('.card-header').innerHTML = categoryIcon(product.category) + ' ' + product.category;
        template.querySelector('.card-title').innerText = product.title;
        template.querySelector('.card-price').innerText =  `$${product.price}`;
        template.querySelector('.card-img-top').src = product.image;
        template.querySelector('.card-img-top').alt = product.title;
        template.querySelector('.card-text').innerText = product.description;
        document.querySelector('#product-list').appendChild(template);
    }

    //reload page after performing a filter
    function loadFilteredProducts(products){
        document.querySelector('#product-list').innerHTML = ''

        products.forEach(product => { 
            let categorySlug = product.category.replaceAll(' ', '_').replaceAll("'", '');
            categories.set(product.category, categorySlug);

            addProduct(product); })

    if(products.length == 0) document.querySelector('#product-list').innerHTML = 'No matching problems found'
    }

    //choose the category to display
    function chooseCategory(e){
        
        let selectedCategory = e.target.value;
        let filteredProduct = allProducts.filter(product => product.category == selectedCategory);
        if (selectedCategory == 'default') filteredProduct =allProducts;
        loadFilteredProducts(filteredProduct);
    }

    //sort the product based on price or title
    function sortProducts(e){
        let selectedOrder = e.target.value;
        let sortedProducts = [...allProducts];

        switch(selectedOrder) {
            case 'price_lowhi': sortedProducts.sort((p1,p2) => p1.price - p2.price); break;
            case 'price_hilow': sortedProducts.sort((p1,p2) => p2.price - p1.price); break;
            case 'title_atoz' : sortedProducts.sort((p1,p2) => p1.title == p2.title ? 0 : (p1.title > p2.title ? 1 : -1)); break;
            case 'title_ztoa' : sortedProducts.sort((p1,p2) => p2.title == p1.title ? 0 : (p2.title > p1.title ? 1 : -1)); break;
        }
        loadFilteredProducts(sortedProducts);
    }

    //search for products
    function searchProducts(){
        let searchText = document.getElementById('searchText').value.toLowerCase();
        let filteredProducts = allProducts.filter(product => product.title.toLowerCase().indexOf(searchText) >= 0 ||
        product.description.toLowerCase().indexOf(searchText)>= 0 || product.category.toLowerCase().indexOf(searchText) >= 0); 
    
        loadFilteredProducts(filteredProducts);
    }
    //add icons to each category heading
    function categoryIcon(c){
        switch(c.toLowerCase()){
            case "men's clothing": return '<i class="fa-solid fa-shirt"></i>';
            case "women's clothing": return '<i class="fa-solid fa-person-dress"></i>'
            case "jewelery": return '<i class="fa-regular fa-gem"></i>';
            case "electronics": return '<i class="fa-solid fa-plug"></i>'   
        }
        return '<i class="fa-brands fa-shirtsinbulk"></i>' ;
    }