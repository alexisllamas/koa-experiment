const Todo = require('../models/todo')

 async function findAll (ctx) {
   const todos = await Todo.find({})
   ctx.body = todos
 }

 async function create (ctx) {
   const newTodo = new Todo(ctx.request.body)
   const savedTodo = await newTodo.save()
   ctx.body = savedTodo
 }

 async function destroy (ctx) {
   const id = ctx.params.id
   const todo = await Todo.findById(id)

   const deletedTodo = await todo.remove()
   ctx.body = deletedTodo
 }

 async function update (ctx) {
   const id = ctx.params.id
   const todo = await Todo.findById(id)
   todo.done = !todo.done

   const updatedTodo = await todo.save()
   ctx.body = updatedTodo
 }

 module.exports = {
   findAll,
   create,
   destroy,
   update
 }
