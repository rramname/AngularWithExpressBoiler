import * as express from 'express'
class app{
   express:express.Application;
   
   constructor(){
       
       this.express=express();
       console.log("hello")
       this.express.listen(3000,()=>{
           console.log("express server started.")
       })
   }

}

export default new app().express;