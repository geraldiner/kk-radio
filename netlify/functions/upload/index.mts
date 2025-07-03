import { getStore } from "@netlify/blobs";
import { Config, Context } from "@netlify/functions";

export default async (request: Request, context: Context) => {
  const formData = await request.formData();
  // Get the file from the form data
  const fileUpload = formData.get("fileUpload") as File;
  // Get the current timestamp as an integer
  const timestamp = Date.now();
  // Load the Netlify Blobs store called "UserUpload"
  const userUploadStore = getStore({
    name: "UserUpload",
    consistency: "strong",
  });
  // Set the file in the store. Use the timestamp as the key.
  const result = await userUploadStore.set(timestamp.toString(), fileUpload);
  console.log("RESULT", result);
  // Return success message
  return new Response(JSON.stringify({ message: "Success!", data: result }), {
    status: 200,
  });
};
