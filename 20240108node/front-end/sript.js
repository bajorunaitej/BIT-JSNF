async function callToServer() {
    try{
        const promise =await fetch("http://localhost:3000/");
        const response  = await promise.text();
        console.log(response);
    } catch(err) {
        console.log(err);
    }

}
callToServer();