import React, { useState, useContext } from "react";

const UserNameContext = React.createContext();
const UpdateUsernameContext = React.createContext();

export const useUsername = () => {
  return useContext(UserNameContext);
};

export const useUpdateUsername = () => {
  return useContext(UpdateUsernameContext);
};

export const UsernameProvider = ({ value, children }) => {
  const [userName, setUserName] = useState(value);
  return (
    <UserNameContext.Provider value={userName}>
      <UpdateUsernameContext.Provider value={setUserName}>
        {children}
      </UpdateUsernameContext.Provider>
    </UserNameContext.Provider>
  );
};

export default UsernameProvider;
