import React from 'react'

type User = {
    firstName: string;
    lastName: string;
}
const formatName = (user: User) => `${user.firstName} ${user.lastName}`
export default function FormatName() {
    const user: User = {
        firstName: "Dang Van",
        lastName: "Luyen",
    }
    return (
        <div>Ho va ten: {formatName(user)}</div>
    )
}
