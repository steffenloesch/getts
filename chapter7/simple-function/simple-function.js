
//@ts-check
const getPrice = () => Math.random()*100;

if (getPrice() < 20) {
    console.log("Buying!");
}