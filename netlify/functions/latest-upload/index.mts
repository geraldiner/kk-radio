import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

export default async (request: Request, context: Context) => {
  // Load the Netlify Blobs store called "UserUpload"
  const userUploadStore = getStore({
    name: "UserUpload",
    consistency: "strong",
  });
  // Get all the blobs in the store
  const userUploadBlobs = await userUploadStore.list();
  const allUploads = userUploadBlobs.blobs.map((blob) => blob.key);
  // Get the latest blobg
  const latestUploadKey = allUploads.sort().pop();
  if (!latestUploadKey) {
    return new Response("No uploads found", { status: 404 });
  }
  const userUploadBlob = await userUploadStore.get(latestUploadKey, {
    type: "stream",
  });
  //Make sure you throw a 404 if the blob is not  found
  if (!userUploadBlob) {
    return new Response("Upload not found", { status: 404 });
  }
  // Return the found blob
  return new Response(userUploadBlob, {
    status: 200,
  });
};
