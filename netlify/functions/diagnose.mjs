import { callOpenRouterDiagnose, generateMockDiagnostic } from '../../shared/diagnose.ts';

export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { companyName, sector, customDetails, metrics } = JSON.parse(event.body);

    if (!companyName || !sector || !metrics) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required parameters: companyName, sector, or metrics' }),
      };
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';

    // Try OpenRouter first; fallback to local mock
    if (apiKey) {
      try {
        const result = await callOpenRouterDiagnose(apiKey, model, companyName, sector, customDetails || '', metrics);
        return { statusCode: 200, body: JSON.stringify(result) };
      } catch (err) {
        console.warn('OpenRouter falhou, usando fallback local:', err.message);
      }
    } else {
      console.log('OPENROUTER_API_KEY não configurada, usando diagnóstico local.');
    }

    const result = generateMockDiagnostic(companyName, sector, customDetails || '', metrics);
    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (error) {
    console.error('API Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Ocorreu um erro ao gerar o diagnóstico de circularidade.' }),
    };
  }
}
