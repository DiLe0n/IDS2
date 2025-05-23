module.exports = [
  // SQL Injection básico y ampliado
  {
    name: 'SQL Injection',
    pattern: /('|--|;|\/\*|\*\/|\b(select|insert|update|delete|drop|union|or|and|exec|xp_)\b|%27|%3B|%2D%2D)/i
  },

  // XSS: etiquetas <script>
  {
    name: 'XSS Script Tag',
    pattern: /<script.*?>.*?<\/script>/i
  },

  // XSS: handlers inline como onmouseover, onclick, etc.
  {
    name: 'XSS Inline Event Handler',
    pattern: /on\w+=["']?.*?["']?/i
  },

  // XSS: URLs con javascript:
  {
    name: 'XSS JavaScript URI',
    pattern: /javascript:/i
  },

  // XSS: caracteres codificados (hex, unicode, html entities)
  {
    name: 'XSS Encoded Payload',
    pattern: /(%3C|%3E|&#x3c;|&#x3e;|\\u003c|\\u003e)/i
  }
];
