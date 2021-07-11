import { createContext, useState } from 'react'

export const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
  const [showFav, setShowFav] = useState(false);
  const [search, setSearch] = useState(null);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  
  function handleActionClick(e) {
    if (e.target.textContent.includes('starred')) {
      setShowFav(true)
    } else (
      setShowFav(false)
    )
  }
  
  function handleEnterClick(e) {
    const value = e.target.value
    const keyCode = e.keyCode || e.witch
    const ENTER = 13
    
    if (keyCode === ENTER) {
      setSearch(value)
      setIsInputDisabled(true)
      setShowFav(false)
    }
  }
  
  return (
    <ProfileContext.Provider value={{
      showFav,
      handleActionClick,
      search,
      handleEnterClick,
      isInputDisabled,
      setIsInputDisabled
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider