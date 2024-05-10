function reducer(state,action) {
    switch (action.type) {
      case "SetProducts":
        return{
          ...state,
          products: action.products,
          filteredProd: action.products
        }
      // case "Categories":
      //   return{
      //     ...state,
      //     categories:s
      //   }
  
  // usr area
        case "SetUser":
        return{
          ...state,
          user: action.user,
          filteredUsr:action.user
        }

      case "Admins":
      let arradmin = [...state.user].filter((elem)=>elem.isAdmin==true)
        return{...state, filteredUsr: arradmin}
  
      case "SearchUsr":
        let arrsusr = state.user.filter((elem)=> elem.userName.includes(action.searchValues))
          return{ ...state, filteredUsr: arrsusr}
      case "A-Zusr":
        let arrusr = [...state.user].sort((a,b)=>a.userName.localeCompare(b.title))
          return{...state, filteredUsr: arrusr}
      case "Z-Ausr":
        let arr1usr = [...state.user].sort((a,b)=>b.userName.localeCompare(a.title))
        return{...state, filteredUsr: arr1usr}
 
  // usr area end
      case "CategoryProd":
        let arrC = [...state.products].filter((elem)=>elem.category==action.filtValue)
        return{...state, filteredProd: arrC}
      case "SearchProd":
        let arrs = state.products.filter((elem)=> elem.title.includes(action.searchValue))
        return{ ...state, filteredProd: arrs}
      case "A-Z":
        let arr = [...state.products].sort((a,b)=>
          a.title.localeCompare(b.title))
          return{...state, filteredProd: arr}
      case "Z-A":
        let arr1 = [...state.products].sort((a,b)=>
          b.title.localeCompare(a.title))
        return{...state, filteredProd: arr1}
        case "low-high":
          let arrl = [...state.products].sort((a,b)=>a.price-b.price)
          return{...state, filteredProd: arrl}
        case "high-low":
          let arrh = [...state.products].sort((a,b)=>b.price-a.price)
          return{...state, filteredProd: arrh}
        case "lowGuanti":
          let arra = [...state.products].sort((a,b)=>a.rating.count-b.rating.count)
          return{...state, filteredProd: arra}
        case "highGuanti":
          let arrz = [...state.products].sort((a,b)=>b.rating.count-a.rating.count)
          return{...state, filteredProd: arrz}
      default:
        break;
    }
  }

  export default reducer