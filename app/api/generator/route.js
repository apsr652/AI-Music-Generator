import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(request) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const { prompt } = await request.json();

  try {
    const output = await replicate.run(
      "facebookresearch/musicgen:7a76a8258b23fae65c5a22debb8841d1d7e816b75c2f24218cd2bd8573787906",
      {
        input: {
          model_version: "melody",
          prompt: prompt,
        },
      }
    );

    return NextResponse.json({ music: output });
  } catch (error) {
    console.error("AI music generation failed:", error);
    return NextResponse.json(
      { error: "AI music generation failed" },
      { status: 500 }
    );
  }
}
