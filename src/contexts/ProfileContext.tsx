import { createContext, useState } from 'react'

export const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
  const [showFav, setShowFav] = useState(false);
  
  return (
    <ProfileContext.Provider value={{
      showFav,
      setShowFav
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider