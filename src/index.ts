import { NativeConnection, Worker } from "@temporalio/worker";

import * as activities from "./activities";
import { greetTaskQueueName } from "./shared";

async function runWorker() {
  const nativeConnection = await NativeConnection.connect({
    address: process.env.TEMPORAL_GRPC_ENDPOINT!,
  });

  const worker = await Worker.create({
    workflowsPath: require.resolve("./workflows"), // Path to the workflows implementation
    taskQueue: greetTaskQueueName, // The task queue this worker will listen to
    connection: nativeConnection,
    activities,
  });

  // Start the worker. It will now start polling for and executing workflows.
  await worker.run();

  await nativeConnection.close();
}

runWorker().catch((err) => {
  console.error(err);
  process.exit(1);
});
