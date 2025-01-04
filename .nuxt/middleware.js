const middleware = {}

middleware['checkLogin'] = require('../middleware/checkLogin.js')
middleware['checkLogin'] = middleware['checkLogin'].default || middleware['checkLogin']

middleware['redirect'] = require('../middleware/redirect.js')
middleware['redirect'] = middleware['redirect'].default || middleware['redirect']

export default middleware
