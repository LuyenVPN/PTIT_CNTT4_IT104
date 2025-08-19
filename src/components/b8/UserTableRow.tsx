import UserTableAction from './UserTableAction'

interface Props {
  stt: number
  name: string
  birth: string
  gender: string
  address: string
}
export default function UserTableRow({ stt, name, birth, gender, address }: Props) {
  return (
    <tr>
      <td>{stt}</td>
      <td>{name}</td>
      <td>{birth}</td>
      <td>{gender}</td>
      <td>{address}</td>
      <td>
        <UserTableAction />
      </td>
    </tr>
  )
}
