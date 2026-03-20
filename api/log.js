export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      'https://api.airtable.com/v0/apprA2DsmcOyrQiWx/Connections',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer patwo3JXgGMPeNWjh.b6c0e9afc71bbdc33a5aa6f54a3c4c9691019f3ad93abffd3e708d9eaee29041',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Airtable error' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
