import { appendFileSync } from "fs";


export async function delay(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}


export function log(data) {
  appendFileSync("request.log", data, err => {
    if (err) throw err;
  });
}
