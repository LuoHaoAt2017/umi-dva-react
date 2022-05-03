
const GlobalModel = {
  namespace: 'GlobalModel',
  state: {
    menus: []
  },
  reducers: {
    SetMenus(state, payload) {
      return {
        ...state,
        menus: payload
      }
    }
  },
  effects: {}
}

export default GlobalModel;