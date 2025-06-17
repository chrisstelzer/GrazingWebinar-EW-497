import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "8kJU4Tx9SsZJU9LxrxJAgq",  // ID of a project you are using
      token: "fNoDOuRYDSq8Z0rZsggGHkWlfHJuigCBbOMfymeXnW8wK5UtCgDqvyO5lwzRJxS4weiKfTIcNazfUVGEgw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
