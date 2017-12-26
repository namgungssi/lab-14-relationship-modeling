## TEST
* npm test (jest)



## Learning Objectives  
* students will be able to create a 2 resource MongoDB and Express API
* students will be able to reference additional resources as part of their mongoose.js based data models
* students will be able to use the `populate` method to allow for resource query population

## Requirements
#### Configuration
* `package.json`
* `.eslintrc`
* `.gitignore`
* `README.md`
  * your `README.md` should include detailed instructions on how to use your API

#### Feature Tasks
  * continue working on the `express` and `mongoDB` REST API that you started yesterday
  * include an additional resource that contains a "relationship" to the single resource that has already been created
  * create `GET`, `POST`, `PUT`, and `DELETE` routes for your newly added resource
  * test your application to ensure that it meets the standard criteria of a working **full CRUD** REST API
  * use `populate` in the `get()` route logic your  `/api/new-resource-name/:id` route to populate the associated property used to house related resources **(ex: `List.findById(req.params.id).populate('notes')`)**
