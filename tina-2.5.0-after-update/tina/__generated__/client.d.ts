import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '00d077abc2bd73c207efaf53daeb288d4ed995f2', queries,  });
export default client;
  