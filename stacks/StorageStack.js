import { Table, Bucket } from "sst/constructs";

export function StorageStack({ stack, app }) {
  // Create an S3 bucket

  const bucket = new Bucket(stack, "Uploads");

  //This creatges the DynamoDB Table

  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
    table,
    bucket,
  };
}
