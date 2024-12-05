# Errors during build after update
After the update, the tina-lock.json file became 158 characters longer, even though I didn’t make any changes to the schemas or content.
Does this change also appear in Tina Cloud?

I pushed the changes (tina-lock.json, package.json, package-lock.json) to the main branch and after that also manually triggered a reindex in Tina Cloud.

Despite this, the build is still failing.


```
PS E:\Kunden\tina-cms-starter-test> npm run build

> tinacms-nextjs-starter@0.2.0 build
> tinacms build && next build

Starting Tina build
Checking clientId and token. ✅
Checking branch is on Tina Cloud. ✅
Checking indexing process in Tina Cloud... ✅

Checking local GraphQL Schema matches server. ✅
Checking local Tina Schema matches server. ❌
Error: The local Tina schema doesn't match the remote Tina schema. Please push up your changes to GitHub to update your remote tina schema.

Additional info: Branch: main, Client ID: cfe04226-91d4-4207-b782-930312e1a9a9
    at BuildCommand.checkTinaSchema (E:\Kunden\tina-cms-starter-test\node_modules\@tinacms\cli\dist\index.js:3214:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async BuildCommand.execute (E:\Kunden\tina-cms-starter-test\node_modules\@tinacms\cli\dist\index.js:2844:7)
    at async BuildCommand.validateAndExecute (E:\Kunden\tina-cms-starter-test\node_modules\clipanion\lib\advanced\Command.js:73:26)
    at async Cli.run (E:\Kunden\tina-cms-starter-test\node_modules\clipanion\lib\advanced\Cli.js:223:24)
    at async Cli.runExit (E:\Kunden\tina-cms-starter-test\node_modules\clipanion\lib\advanced\Cli.js:232:28)
```