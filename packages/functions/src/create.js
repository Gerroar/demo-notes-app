import handler from "@notes/core/handler";
import * as uuid from "uuid";
import { Table } from "sst/node/table";
import dynamoDb from "@notes/core/dynamodb";

export const main = handler (async (event) => {
    // Request body is passed in as a JSON string in
    const data = JSON.parse(event.body);

    const params = {
        TableName: Table.Notes.tableName,
        Item: {
            // The attributes of the item to be created
            userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, // The id of the author
            noteId: uuid.v1(), // A unique uuid
            content: data.content, // Parsed from request body
            createdAt: Date.now(), // Current Unix timestamp

        },
    };

    await dynamoDb.put(params);
    return params.Item;
});