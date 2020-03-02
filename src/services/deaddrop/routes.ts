import { Request, Response } from "express";
//import {  } from "./DropController";

export default [
  {
    path: "/api/v1/deaddrop",
    method: "post",
    handler: async (req: Request, res: Response) => {
      res.send("Hello world!");
    }
  }
];