import { db } from "server/db";
import { publicProcedure } from "server/lib/orpc.ts";

// import { publicProcedure } from "server/lib/orpc"; // error

const _stub = publicProcedure;
const _db = db;
