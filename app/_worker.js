import { onRequestPost as transcribe } from '../functions/api/transcribe.js';
import { onRequestPost as ledger, onRequestGet as evidence, onRequestEvidencePost as uploadEvidence } from '../functions/api/ledger.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/api/transcribe') {
      return transcribe({ request, env });
    }
    if (request.method === 'POST' && url.pathname === '/api/ledger') {
      return ledger({ request, env });
    }
    if (request.method === 'POST' && url.pathname === '/api/evidence') {
      return uploadEvidence({ request, env });
    }
    if (request.method === 'GET' && url.pathname.startsWith('/api/evidence/')) {
      return evidence({ request, env });
    }
    return env.ASSETS.fetch(request);
  }
};
