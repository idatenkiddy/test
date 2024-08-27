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
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}

// Keep your GET and POST methods in this file as well
