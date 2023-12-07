/*//callack/ event
addEventListener(event, callback)
setInterval(callback, interval)
setTimeout(callback, timeout)

//promises (.then(), async/await)
fatch().then().then().catch()
*/

console.log("sono la prima istruzione") //prima

setTimeout(() => {
    console.log("sto nella callback") // dopo 5 sec
}, 5000)

console.log("sono l'ultima istruzione") //seconda