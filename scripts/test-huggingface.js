import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

async function testHuggingFace() {
  const API_URL =
    "https://api-inference.huggingface.co/models/SEBIS/code_trans_t5_base_commit_generation";

  try {
    console.log("Testing Hugging Face API...");
    console.log("Token available:", !!process.env.HUGGING_FACE_TOKEN);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs:
          "Generate a conventional commit message for this diff:\n\ndiff --git a/eslint.config.js b/eslint.config.js\nnew file mode 100644\nindex 0000000..e69de29\n--- /dev/null\n+++ b/eslint.config.js",
        parameters: {
          max_new_tokens: 50,
          temperature: 0.3,
          top_p: 0.9,
          do_sample: true,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", JSON.stringify(data, null, 2));
    console.log("Test successful!");
  } catch (error) {
    console.error("Test failed:", error.message);
    if (error.message.includes("401")) {
      console.error(
        "Error 401: Unauthorized. Your token might be invalid or expired.",
      );
    }
  }
}

testHuggingFace();
