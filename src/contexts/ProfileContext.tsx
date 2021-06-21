import { createContext, useState } from 'react'

export const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
  const [showFav, setShowFav] = useState(false);
  const [search, setSearch] = useState(null);
  
  function handleActionClick() {
    setShowFav(!showFav);
  }
  
  function handleEnterClick(e) {
    const value = e.target.value
    const keyCode = e.keyCode || e.witch
    const ENTER = 13
    
    if (keyCode === ENTER) {
      setSearch(value)
    }
  }
  
  return (
    <ProfileContext.Provider value={{
      showFav,
      handleActionClick,
      search,
      handleEnterClick
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider