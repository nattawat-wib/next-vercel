import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";

import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://xBJPIVW0FtTHaeOi:xBJPIVW0FtTHaeOi@next-port-vercel.at8ll9e.mongodb.net/",
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }
);

const projectSchema = new mongoose.Schema({
  name: "string",
  desc: "string",
});

const projectModel = mongoose.model("project", projectSchema);

export async function GET(req: NextRequest, res: NextApiResponse) {
    console.log('in in');
    const result = await projectModel.find({});

    console.log(result);

  return Response.json({
    status: "success",
    message: "api is work",
    result
  });
}
