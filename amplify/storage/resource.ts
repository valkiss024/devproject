import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyTestStorage",
  access: (allow) => ({
    "pp_presentations/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});
