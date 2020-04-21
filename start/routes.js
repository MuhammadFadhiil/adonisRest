'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.group(() => {
  Route.get('siswa', 'SiswaController.index')
  Route.get('siswa/:id', 'SiswaController.show')
  Route.post('siswa', 'SiswaController.store')
  Route.put('siswa/:id', 'SiswaController.update')
  Route.delete('siswa/:id', 'SiswaController.delete')
  }).prefix('api/v1')
  