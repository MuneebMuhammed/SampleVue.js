var app = new Vue({
    el: "#main",
    data: {
        tittle: "Bitcoin Price Index",
        error: false,
        responseData: null,
    },
    mounted(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(data => {
            console.log(data, "dddd")
            this.responseData = data.bpi;
        })
        .catch(err => {
            console.log(err)
            this.error = true;
        })
    }
})

