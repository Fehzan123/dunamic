// GET REQUEST
function getTodos() {
// axios({
//   method:'get',
//   url:'https://jsonplaceholder.typicode.com/todos',
//   params:{
//     _limit:'5'
//   }
// }).then(res=>showOutput(res))
// .catch(err=>console.log(err));
// }
axios
.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
}

// POST REQUEST
function addTodo() {
  axios({
      method:'post',
      url:'https://jsonplaceholder.typicode.com/todos',
     data:{
      title:'new todo',
      completed:false
     }
    }).then(res=>showOutput(res))
    .catch(err=>console.log(err));
    
    

}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
  axios({
    method:'PATCH',
    url:'https://jsonplaceholder.typicode.com/todos/1',
   data:{
    title:'new todo',
    completed:true
   }
  }).then(res=>showOutput(res))
  .catch(err=>console.log(err));
  
  

}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
  axios({
    method:'DELETE',
    url:'https://jsonplaceholder.typicode.com/todos/1',
   
  }).then(res=>showOutput(res))
  .catch(err=>console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  
 axios.all([
  axios.get('https://jsonplaceholder.typicode.com/todos'),
  axios.get('https://jsonplaceholder.typicode.com/posts')
 ])
 .then(axios.spread((todos,posts)=>showOutput(posts)))
 .catch(err=>console.log(err));

  
  }

// CUSTOM HEADERS
function customHeaders() {
  
    const config={
headers:{
  'Content-Type':'application/json',
  Athorizattion:'sometoken'
}
    
  };
  axios.post(
    'https://jsonplaceholder.typicode.com/todos',
    {
      title:'new Todo',
      completed:false
    },
    config
  )
  .then(res=>showOutput(res))
  .catch(err=>console.log(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
//   const options={
// method:'post',
// url:'https://jsonplaceholder.typicode.com/todos',
// data:{
//   title:'hello worl'
// },
// transformResponse:axios.default.transformResponse.concat(data=>{
//   data.title=data.title.toUpperCase();
//   return data;
// })


//   }
//   axios(options).then(res=>showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
  axios
  .get('https://jsonplaceholder.typicode.com/todos')
  .then(res=>showOutput(res))
  .catch(err=>{
    if(err.response){
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      if(err.response.status===404){
        alert('Error: page not found');
      }

    }
  });
}

// CANCEL TOKEN
function cancelToken() {
  axios({
    method:'post',
    url:'https://jsonplaceholder.typicode.com/todos',
   data:{
    title:'new todo',
    completed:false
   }
  }).then(res=>showOutput(res))
  .catch(err=>console.log(err));
  
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
 
)
// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
