const middleware = {}

middleware['security'] = require('../middleware/security.js')
middleware['security'] = middleware['security'].default || middleware['security']

export default middleware
