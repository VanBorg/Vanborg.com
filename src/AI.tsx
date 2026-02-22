/**
 * Van Borg DNA – public context for AI tools (in-app / programmatic use).
 * Re-exports the full Van Borg HTML so AI assistants can reference company info,
 * prices, locations, and services. For scrapable public URL use /company-context-for-ai.html
 * (copied to public/ on build). Source of truth: project root van-borg-dna.html.
 */
export { VAN_BORG_DNA_HTML, default } from './llms'
