//                 promise

const promiseFromGirl=new Promise((resolve,reject)=>{
    let parentDecision=false
    if(parentDecision){
        resolve('yayy,shaadi ki tayyari kro')
    }else{
        reject('Abhi padhai kro')
    }
})



promiseFromGirl.then((msg)=>{
    console.log('Message from the girl : '+msg);
    console.log('My life is set');
}).catch((msg)=>{
    console.log('Message from the girl : '+msg);
    console.log('Thik hai mei Abhi padhai kruga');
}).finally(()=>{
    console.log('Finally,I am clear ');
})


//            promise 

const dost1promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve('Dost 1 is ready to come');
        }else{
            reject('Dost 1 is not coming');
        }
    },2000)
})

const dost2promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       if(Math.random()>0.5){
        resolve('Dost 2 is ready to come');
       }else{
        reject('Dost 2 is not coming');
       }
    },3000)
})
const friendPromises=[dost1promise,dost2promise]
Promise.all(friendPromises).then(mess=>{
    console.log(mess);
    console.log('I will marry');
}).catch(mess=>{
    console.log(mess);
    console.log('I will not marry');
})


//         Promise.any
const gf1promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5)
            {
                resolve("gf 1 is ready to come")
            }
        else{
            reject('gf 1 is not ready to come')
        }
    },4000)
})
const gf2promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random>0.5){
            resolve("gf 2 is ready to come")
        }
        else{
            reject('gf 2 is not ready to come')
        }
    },1000)
})

const gfpromise=[gf1promise,gf2promise]
Promise.any(gfpromise).then(msg=>{
    console.log(msg);
    console.log('Thank you babu');
}).catch(msg=>{
    console.log(msg);
    console.log('Not right babu');
})


