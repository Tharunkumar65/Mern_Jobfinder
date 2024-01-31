








// post a job



// get jobs by id


// get jobs by email



// Update a job
app.patch("/update-job/:id",async(req,res)=>{
   const id = req.params.id;
   const jobData = req.body;
   const filter = {_id:new ObjectId(id)};
   const options={upsert:true};
   const updatedata = {
    $set:{
      ...jobData
    },
   };
   const result = await jobscoll.updateOne(filter,updatedata,options);
   res.send(result);
})


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send("Hello world");
})



app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})