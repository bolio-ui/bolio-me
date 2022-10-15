/* eslint-disable react/prop-types */
import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo
} from 'react'

export type UserContextData = {
  user: {}
  updateValue: {}
}

export const UserContextDefaultValues = {
  user: {},
  updateValue: {}
}

export const UserDataContext = createContext<UserContextData>(
  UserContextDefaultValues
)

export const useUserDataContext = () => useContext(UserDataContext)

const Provider = ({ children }) => {
  const [value, setValue] = useState({})

  const updateValue = useCallback((next) => {
    setValue((last) => {
      const newValue = { ...last.user, ...next }
      return newValue
    })
  }, [])

  const initialValue = useMemo(
    () => ({
      user: { ...value },
      updateValue
    }),
    [value, updateValue]
  )
  return (
    <UserDataContext.Provider value={initialValue}>
      {children}
    </UserDataContext.Provider>
  )
}
export default { Provider, Consumer: UserDataContext.Consumer }
