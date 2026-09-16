import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if ((email == 'admin@gmail.com' || email == 'admin@me.com') && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (Array.isArray(userData)) {
      const employee = userData.find((employeeData) => email == employeeData.email && employeeData.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }


  let dashboard = null
  if (user == 'admin') {
    dashboard = <AdminDashboard changeUser={setUser} />
  } else if (user == 'employee') {
    dashboard = <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
  }


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {dashboard}
    </>
  )
}

export default App