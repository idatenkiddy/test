import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const todos = await prisma.todo.findMany()
  return Response.json(todos)
}

export async function POST(request) {
  const { title } = await request.json()
  const todo = await prisma.todo.create({
    data: { title },
  })
  return Response.json(todo)
}
