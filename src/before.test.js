 
describe("Initialize docker", () => {
     
    beforeAll(async(done) => {
        console.log("Check point 1");

        await setTimeout(()=> {
            done()
        }, 1000);
         
 
    });

    it("This is to test the order of execution", () => {
        console.log("Check point 3");

    })

 
});
