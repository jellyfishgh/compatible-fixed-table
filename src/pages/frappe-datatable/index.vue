<template lang="pug">
  div(:id='id')
</template>

<script>
import 'frappe-datatable/dist/frappe-datatable.css'
import DataTable from 'frappe-datatable'
import data from '../../config/data'
import cols from '../../config/cols'
export default {
  name: 'frappe-datatable',
  data() {
    return {
      id: 'frappe'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      new DataTable(`#${this.id}`, {
        serialNoColumn: false,
        data,
        columns: cols.map(({ label, prop, width }) => ({
          name: label,
          id: prop,
          width,
          editable: false,
          resizable: false,
          sortable: false,
          focusable: false,
          dropdown: false
        }))
      })
    }
  }
}
</script>
