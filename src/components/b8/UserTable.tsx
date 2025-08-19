import React from 'react'
import UserTableHeader from './UserTableHeader'
import UserTableRow from './UserTableRow'
import './UserTable.css'
const userList = [
  {
    name: 'Malcolm Lockyer',
    birth: '21/03/1961',
    gender: 'Nam',
    address: 'New york'
  },
  {
    name: 'Maria',
    birth: '11/02/1990',
    gender: 'Nu',
    address: 'London'
  }
]

export default function UserTable() {
  return (
    <div className="user-table-wrapper">
      <table className="user-table">
        <UserTableHeader />
        <tbody>
          {userList.map((user, idx) => (
            <UserTableRow
              key={idx}
              stt={idx + 1}
              name={user.name}
              birth={user.birth}
              gender={user.gender}
              address={user.address}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
