import "server-only";

// Structured server logs on stderr, where Vercel's function logs pick them up.
export function logError(scope: string, message: string, error?: unknown) {
  process.stderr.write(
    JSON.stringify({
      level: "error",
      scope,
      message,
      error: error instanceof Error ? error.message : String(error ?? ""),
      time: new Date().toISOString(),
    }) + "\n",
  );
}
