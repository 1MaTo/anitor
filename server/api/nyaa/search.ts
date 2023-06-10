import { si } from "nyaapi";

export default eventHandler(async () => {
  try {
    const result = await si.search("HorribleSubs", 20, {
      filter: 2,
    });
    return { hello: "good", search: result };
  } catch (error) {
    return { hello: "error", search: [] };
  }
});
