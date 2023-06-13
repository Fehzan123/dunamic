console.log('por1 shows the ticket');

console.log('por2 shows the ticket');

const premovie=async()=>{
    const promisewife=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('tecket'),3000);
    });
    const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    const addbuttur=new Promise((resolve,reject)=>resolve(`addbuttur`));
    const getcoldrinks=new Promise((resolve,reject)=>resolve(`getcoldrinks`));

    let tiket=await promisewife;

    console.log(`wife : i have ${tiket}`);
    console.log('husband : we should go in');
    console.log('wife : i am hungry');

    let popcorn=await getpopcorn;
    
    console.log(`husband : I got some ${popcorn}`);
    console.log('husband : we should go in');
    console.log('wife : I need buttur on my popcorn');

let buttur=await addbuttur;
console.log(`husband : I got some ${buttur}`);
console.log('enythink els darling');
console.log('wife : lets go we r getting late');
console.log('husband : thank you for the reminder *grins*');
let coldrink=await getcoldrinks;

console.log(`husband : I got some ${coldrink}`);
console.log('enythink els darling');
console.log('wife : lets go we r getting late');
console.log('husband : thank you for the reminder *grins*');
    return tiket;
}
premovie().then((m)=>console.log(m));
console.log('por4 shows the ticket');
console.log('por5 shows the ticket');