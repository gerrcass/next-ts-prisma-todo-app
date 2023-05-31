import prisma from './prisma'

export async function getTodos() {
  console.log('ENTRE')
  try {
    console.log('LO INTENTE')
    const todos = await prisma.todo.findMany()
    console.log('HERE')
    console.log(todos)
    return { todos }
  } catch (error) {
    console.log(error)
    return { error }
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await prisma.todo.create({ data: { title } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function getTodoById(id: string) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function updateTodo(id: string, isCompleted: boolean) {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { isCompleted }
    })
    return { todo }
  } catch (error) {
    return { error }
  }
}
