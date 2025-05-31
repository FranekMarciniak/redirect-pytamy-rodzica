import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.url === '/') {
    return res.redirect(301, 'https://www.example.com');
  }
  
  const { name = 'World' } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
}
