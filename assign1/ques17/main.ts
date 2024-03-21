let guests:string[]=["maha","sana","manahil","uzaiba"];
while(guests.length>2){
    let removedguest=guests.pop();
    console.log(
        `sorry ${removedguest} i can't invite you all`
    );
};
guests.forEach(guest=>{
    console.log(`dear ${guest},you are still invited`)
});
guests.splice(0,guests.length);
console.log(guests);