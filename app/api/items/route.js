// GET (read all), POST (create new task)
import dbConnect from '@/lib/mongodb';
import Task from '@/models/Task';

export async function GET() {
  await dbConnect();
  const tasks = await Task.find();
  return Response.json(tasks);
}

export async function POST(req) {
  const data = await req.json();
  await dbConnect();
  const task = await Task.create(data);
  return Response.json(task);
}
