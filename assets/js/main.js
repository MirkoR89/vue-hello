//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
let text = new Vue({
  el: "#root",
  data: {
    message: "Welcome to Vue.js"
  }
})

//Bonus: Aggiungere un’immagine presa anch’essa da un data.
let img = new Vue({
  el: "#root2",
  data: {
    image: "https://hackernoon.com/hn-images/1*ACR0gj0wbx91V_xgURifWg.png"
  }
})
