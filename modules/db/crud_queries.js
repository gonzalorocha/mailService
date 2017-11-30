module.exports.usuario = {
  get: 'SELECT * FROM usuario',
  getById: 'SELECT * FROM usuario WHERE id = ? ',
  getByUser: 'SELECT id FROM usuario WHERE usuario = ?',
  post: 'INSERT INTO usuario SET ?',
  put: 'UPDATE usuario SET ? WHERE ?',
  delete: 'delete usuario WHERE id = ?'
};


module.exports.mensaje = {
  get: 'SELECT m.asunto, m.mensaje, m.remitente, m.fecha , u.mail as email FROM mensaje m inner join usuario u on m.remitente = u.id inner join recipiente r on r.mensaje_id = m.id WHERE r.destinatario_id = 1',
  getRecibidos: 'SELECT m.asunto, m.mensaje, m.remitente,m.fecha, u.mail FROM mensaje m inner join usuario u on m.remitente = u.id inner join recipiente r on r.mensaje_id = m.id WHERE r.destinatario_id = 1',
  getEnviados:'SELECT m.asunto, m.mensaje, m.fecha FROM mensaje m inner join usuario u on m.remitente = u.id WHERE 	m.remitente = ?',
  getById: 'SELECT * FROM mensaje WHERE id = ? ',
  getTipoR: 'SELECT * FROM tipo_recipiente',
  post: 'INSERT INTO mensaje SET ?',
  postRecipiente: 'INSERT INTO recipiente SET ?',
  put: 'UPDATE mensaje SET ? WHERE ?',
  delete: 'delete mensaje WHERE id = ?'
};

module.exports.localidad = {
  get: 'SELECT id,nombre FROM cuidad WHERE provincia_id = ?',
  getProvincia: 'SELECT id,nombre FROM provincia WHERE pais_id = ?',
  getPais: 'SELECT id,nombre FROM pais'
};