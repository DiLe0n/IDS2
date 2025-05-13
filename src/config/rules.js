module.exports = [
  {
    name: 'SQL Injection',
    pattern: /('|--|;|\b(select|insert|update|delete|drop|union)\b)/i
  },
  {
    name: 'XSS Attack',
    pattern: /<script.*?>.*?<\/script>/i
  }
];
