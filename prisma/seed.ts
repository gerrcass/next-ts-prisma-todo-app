import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const todoData: Prisma.TodoCreateInput[] = [
  {
    title: 'First todo task',
    isCompleted: false
  },
  {
    title: 'Second todo task',
    isCompleted: false
  },
  {
    title: 'Third todo task',
    isCompleted: false
  },
  {
    title: 'Forth todo task',
    isCompleted: false
  },
  {
    title: 'Fifth todo task',
    isCompleted: false
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const todoItem of todoData) {
    const todo = await prisma.todo.create({
      data: todoItem
    })
    console.log(`Created todo with id: ${todo.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
