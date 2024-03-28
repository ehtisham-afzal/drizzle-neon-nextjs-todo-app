"use server"

import db from "@/db/drizzle"
import { todo } from "@/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"


export const getData = async () => {
    const Data = await db.select().from(todo)
    return Data;
}

export const addTodo = async (id: number, text: string) => {
    await db.insert(todo).values({
        id: id,
        text: text
    })
    revalidatePath("/")
}

export const updateIsCompleted = async (id: number, done: boolean) => {
    await db.update(todo).set({ isDone: done }).where(eq(todo.id, id))
    revalidatePath("/")
}

export const UpdateTodoText = async (id: number, text: string) => {
    await db.update(todo).set({ text: text }).where(eq(todo.id, id))
    revalidatePath("/")
}

export const DeleteTodo = async (id: number) => {
    await db.delete(todo).where(eq(todo.id, id))
    revalidatePath("/")
}