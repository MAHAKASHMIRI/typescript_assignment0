 let guests:string[]=["maha", "sana", "manahil"];
 let unableToAttend:string="manahil";
 console.log(`${unableToAttend} , can't make it to dinner`);
   let newGuest="uzaiba";
guests[guests.indexOf(unableToAttend)]=newGuest;
guests.forEach(guest=>{
   console.log(`dear ${guest},would you like to join me for dinner?`)
})