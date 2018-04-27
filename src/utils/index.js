const KEY = 'react-todo-no-redux'
export const filters =[
  {
    id: 'all',
    text: 'SHOW_ALL'
  },
  {
    id: 'completed',
    text: 'SHOW_COMPLETED'
  },
  {
    id: 'active',
    text: 'SHOW_ACTIVE'
  }
]

export const getFilteredList = (list, filter) => {
  const arr = Object.keys(list).map((key) => {
    let item = list[key]
    item.id = key

    return item
  })

  switch (filter) {
    case 'SHOW_ALL':
      return arr
    case 'SHOW_COMPLETED':
      return arr.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return arr.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

export const isCompletedAll = (list) => getFilteredList(list, 'SHOW_ALL').length ===  getFilteredList(list, 'SHOW_COMPLETED').length

export const localWorker = {
  fetch: function () {
    var list = JSON.parse(localStorage.getItem(KEY) || '[]')
    list.forEach(function (item, index) {
      item.id = index
    })

    return list
  },

  save: function (list) {
    localStorage.setItem(KEY, JSON.stringify(list))
  }
}
