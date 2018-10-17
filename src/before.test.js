 
describe("Initialize docker", () => {
     
    beforeAll(async(done) => {
        console.log("Check point 1");

        await setTimeout(()=> {
            console.log("Check point 2");
            done()
        }, 3000);
         
 
    });

    it("This is to test the order of execution", () => {
        console.log("Check point 3");

    })

 
});
