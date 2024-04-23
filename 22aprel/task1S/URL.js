let product = fetch('api.github.com/users').then((response) => {
    then(data => {
        console.log('Data received:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    cachesnsole.log(response); 
});

async function createTablr(data) {
    let data = await data
}
product.forEach(element => {
    eportBody.innerHtml += `
    <div class="said" style="display: flex;">
    <p>1</p>
    <p>UserName</p>
    <p>nodeId</p>
    <p>Position</p> 
 </div>
 <div>
     <p>${elem.id}</p>
     <p>${elem.node_id}</p>
     <p>${elem.node_id}</p>
     <p>${elem.login}</p>
 </div>`  
});
