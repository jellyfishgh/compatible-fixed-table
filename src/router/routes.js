import FrappeDatatable from '../pages/frappe-datatable'

const routes = [
  {
    name: 'frappe-datatable',
    path: '/frappe-datatable',
    component: FrappeDatatable
  }
]

export default [
  ...routes,
  {
    path: '*',
    redirect: routes[0].path
  }
]
