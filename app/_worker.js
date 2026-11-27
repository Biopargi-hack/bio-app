import { onRequestPost } from '../functions/api/transcribe.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/api/transcribe') {
      return onRequestPost({ request, env });
    }
    return env.ASSETS.fetch(request);
  }
};
