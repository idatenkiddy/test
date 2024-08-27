import { NextResponse } from "next/server";
import prisma from "@/../lib/prisma";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json(
      { message: "Todo deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { title } = await request.json();
    const todo = await prisma.todo.create({
      data: { title },
    });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}
