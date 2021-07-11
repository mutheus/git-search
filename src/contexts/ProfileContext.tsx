import { createContext, useState, ReactNode } from 'react'

type ProfileContextData = {
  showFav: boolean;
  handleActionClick: (e: object) => void;
  search: string;
  handleEnterClick: (e: object) => void;
  isInputDisabled: boolean;
  setInputState: (state: boolean) => void;
}

export const ProfileContext = createContext({} as ProfileContextData)

type ProfileProviderProps = {
  children: ReactNode;
}

const ProfileProvider = ({ children }: ProfileProviderProps) => {
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
  
  function setInputState(state: boolean) {
    setIsInputDisabled(state)
  }
  
  return (
    <ProfileContext.Provider 
      value={{
        showFav,
        handleActionClick,
        search,
        handleEnterClick,
        isInputDisabled,
        setInputState
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider
