

export  const  getProducts = async () => {
    const resp = await fetch('https://dummyjson.com/products')
    return resp.json()

}