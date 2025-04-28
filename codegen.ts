import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";
const config: CodegenConfig = {
  schema: process.env["CODEGEN_API_URL"],
  documents: ["./app/**/*.graphql"],
  generates: {
    "lib/client/__generated__/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};
export default config;
