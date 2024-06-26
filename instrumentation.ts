export async function register() {
  console.log('jfaskdjlflksajdf', process.env.NEXT_RUNTIME);
  if (process.env.NEXT_RUNTIME === 'bun') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}
