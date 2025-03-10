const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log("button clicked");
    let product = e.target.productName.value;

    let obj = {
        "productName":product
    }

    axios({
        method: 'post',
        url: 'http://localhost:5000/products',
        data: obj
    })
    .then((result) => {
        console.log(result.data.value);
    }).catch((error) => {
        console.log(error);
    })

}