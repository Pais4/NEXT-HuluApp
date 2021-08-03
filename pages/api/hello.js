// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const user = {
  id: 1,
  name: 'Mateo',
  lastName: 'Serna',
  role: 'Developer',
  password: 'ja#*"3k#$%##""$#sd',
}

export default function handler(req, res) {
  res.status(200).json(user)
}