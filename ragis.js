


var submit=document.getElementById('submit');
submit.addEventListener('click',addfun);

function addfun(event){
    
        event.preventDefault();
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
            `${ItemName.value} : ${des.value}`
            )
        );
    
        itemList.appendChild(li);
    
        let store ={
            item: ItemName.value,
            description: des.value,
            
        }
    
        axios.post("https://crudcrud.com/api/bc7d00ff5c9d4dfc913da6ad9b1bc931/shopItemData", store)
            .then((response) => {
              li.id= response.data._id
            })
            .catch((err) => {
              console.log(err);
            })
        let space = document.createTextNode(" ");
        li.appendChild(space);
        let buyOne = document.createElement("button");
        buyOne.className = "buyone btn-light btn-sm float-right buyone";
        buyOne.appendChild(document.createTextNode("Buy One"));
        li.appendChild(buyOne);
        li.appendChild(space);
        let buyTwo = document.createElement("button");
        buyTwo.className = "buytwo btn-light btn-sm float-right buytwo";
        buyTwo.appendChild(document.createTextNode("Buy Two"));
        li.appendChild(buyTwo);
        
        ItemName.value = "";
        des.value = "";
        
    }
    
    // reload functionality
    // reload functionality
    window.addEventListener("DOMContentLoaded", () => {
        axios.get("https://crudcrud.com/api/bc7d00ff5c9d4dfc913da6ad9b1bc931/shopItemData")
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    let key = response.data[i];
                    const li = document.createElement("li");
                    li.appendChild(document.createTextNode(`${key.item} : ${key.description}`));
                    itemList.appendChild(li);
    
                    li.id = key._id;
    
                    let space = document.createTextNode(" ");
                    li.appendChild(space);
    
                    let buyOne = document.createElement("button");
                    buyOne.className = "buyone btn-light btn-sm float-right buyone";
                    buyOne.appendChild(document.createTextNode("Buy One"));
                    li.appendChild(buyOne);
    
                    li.appendChild(space);
    
                    let buyTwo = document.createElement("button");
                    buyTwo.className = "buytwo btn-light btn-sm float-right buytwo";
                    buyTwo.appendChild(document.createTextNode("Buy Two"));
                    li.appendChild(buyTwo);
                }
            })
            .catch((err) => console.log(err))
    });
    
    // buyone functionality
    itemList.addEventListener('click', (event) => {
        if (event.target.classList.contains('buyone')) {
            handleBuyOneClick(event);
        }
    });
    
    function handleBuyOneClick(event) {
        const li2 = event.target.parentNode;
        const itemId = li2.id;
     console.log(itemId)
    
        axios.get(`https://crudcrud.com/api/bc7d00ff5c9d4dfc913da6ad9b1bc931/shopItemData/${itemId}`)
            .then((response) => {
                let it = response.data
                console.log(it);
                if (it.quantity > 0) {
                    // Reduce the quantity by 1
                    console.log(it.quantity);
                    it.quantity -= 1;
                    console.log(it.quantity);
                    console.log(it);
    
                    console.log(itemId)
                    axios.put(`https://crudcrud.com/api/bc7d00ff5c9d4dfc913da6ad9b1bc931/shopItemData/${itemId}`, it)
                        .then((response) => {
                            // response.data.quantity = it.quantity;
                            li2.appendChild = `${it.item} : ${it.description}`;
                        })
                        .catch((err) => {
                            console.log(err);
                            
                        });
                } 
                
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    itemList.addEventListener('click', (event) => {
        if (event.target.classList.contains('buytwo')) {
            handleBuyTwoClick(event);
        }
    });
    
    function handleBuyTwoClick(event) {
        const li2 = event.target.parentNode;
        const itemId = li2.id;
     console.log(itemId)
    
        axios.get(`https://crudcrud.com/api/bc7d00ff5c9d4dfc913da6ad9b1bc931/shopItemData/${itemId}`)
            .then((response) => {
                let it = response.data
                console.log(response.data.quantity);
                if (it.quantity > 0) {
                    // Reduce the quantity by 1
                    console.log(response.data.quantity);
                    it.quantity -= 2;
                    console.log(response.data.quantity);
                    console.log(it);
    
                    console.log(itemId)
                    axios.put(`https://crudcrud.com/api/bc7d00ff5c9d4dfc913da6ad9b1bc931/shopItemData/${itemId}`, it)
                        .then((response) => {
                            // Update the quantity on the screen
                            response.data.quantity = it.quantity;
                            li2.appendChild = `${it.item} : ${it.description}`;
                        })
                        .catch((err) => {
                            console.log(err);
                            
                        });
                } 
                
            })
            .catch((err) => {
                console.log(err);
            });
    }

