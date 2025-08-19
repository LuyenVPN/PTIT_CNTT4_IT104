import React from 'react'

export default function UserInfo() {
    const user={
      name: "Nguyen Van A",
      gioiTinh: "Nam",
      ngaySinh: "06/03/2024",
      email: "nva@gmail.com",
      address: "Thanh Xuan, Ha Noi" 
    }
  return (
    <div>
    <p>Thong Tin sinh vien </p>
    <ul>
        <li>Ho Va Ten: {user.name}</li>
        <li>Gioi Tinh: {user.gioiTinh}</li>
        <li>Ngay Sinh: {user.ngaySinh}</li>
        <li>Email: {user.email}</li>
        <li>Dia Chi: {user.address}</li>
    </ul>
  </div>
  )
}

