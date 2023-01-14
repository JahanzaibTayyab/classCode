import type { NextApiRequest, NextApiResponse } from "next";
import { deleteTodo } from "./list";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    deleteTodo(id as string);
    res.status(200).json({ msg: "todo deleted" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
}
