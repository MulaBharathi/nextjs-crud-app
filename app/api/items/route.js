import dbConnect from '@/lib/mongodb';
import Task from '@/models/Task';
import { NextResponse } from 'next/server';

// GET /api/tasks/:id
export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;
  const task = await Task.findById(id);
  if (!task) {
    return NextResponse.json({ message: 'Task not found' }, { status: 404 });
  }
  return NextResponse.json(task);
}

// PUT /api/tasks/:id
export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = params;
  const data = await req.json();
  const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true });
  if (!updatedTask) {
    return NextResponse.json({ message: 'Task not found' }, { status: 404 });
  }
  return NextResponse.json(updatedTask);
}

// DELETE /api/tasks/:id
export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = params;
  const deletedTask = await Task.findByIdAndDelete(id);
  if (!deletedTask) {
    return NextResponse.json({ message: 'Task not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Task deleted' });
}
