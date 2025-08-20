import React, { Component } from "react";

type TaskType = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
};

type StateType = {
  tasks: TaskType[];
};

function formatDate(date: Date) {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + date.getFullYear() + " " 
    + pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds())
  );
}

export default class Todolist extends Component<unknown, StateType> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Thiet ke giao dien Header",
          assign: "Nguyen Van A",
          status: false,
          created_at: new Date(),
        },
        {
          id: 2,
          name: "Thiet ke giao dien Footer",
          assign: "Nguyen Van B",
          status: true,
          created_at: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <table
          border={1}
          cellPadding={8}
          cellSpacing={0}
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead style={{ background: "#f8fafc" }}>
            <tr>
              <th>STT</th>
              <th>Ten cong viec</th>
              <th>Nguoi thuc hien</th>
              <th>Trang thai</th>
              <th>Thoi gian tao</th>
              <th>Chuc nang</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task, idx) => (
              <tr key={task.id}>
                <td>{idx + 1}</td>
                <td style={{ textAlign: "left" }}>{task.name}</td>
                <td>{task.assign}</td>
                <td>
                  {task.status ? (
                    <span
                      style={{
                        background: "#d4f6df",
                        color: "#3da75c",
                        border: "1px solid #a2e7b9",
                        borderRadius: 5,
                        padding: "2px 12px",
                      }}
                    >
                      Hoan thanh
                    </span>
                  ) : (
                    <span
                      style={{
                        background: "#ffe5e5",
                        color: "#ea5151",
                        border: "1px solid #ffc9c9",
                        borderRadius: 5,
                        padding: "2px 12px",
                      }}
                    >
                      Chua hoan thanh
                    </span>
                  )}
                </td>
                <td>{formatDate(task.created_at)}</td>
                <td>
                  <button
                    style={{
                      background: "#fffbe6",
                      color: "#d48806",
                      border: "1px solid #ffe58f",
                      borderRadius: 3,
                      marginRight: 6,
                      padding: "2px 8px",
                    }}
                  >
                    Sua
                  </button>
                  <button
                    style={{
                      background: "#fff1f0",
                      color: "#cf1322",
                      border: "1px solid #ffa39e",
                      borderRadius: 3,
                      padding: "2px 8px",
                    }}
                  >
                    Xoa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
