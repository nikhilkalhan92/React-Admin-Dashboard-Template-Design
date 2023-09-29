export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },

    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Jayden Maddison",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "jaydenmaddison@gmail.com",
      age: 31,
    },
    {
      id: 2,
      username: "Aaron Bruno Maddison",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "amaddison@gmail.com",
      status: "passive",
      age: 27,
    },
    {
      id: 3,
      username: "Nik Kalhan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "nkalhan@hotmail.co.uk",
      status: "pending",
      age: 31,
    },
    {
      id: 4,
      username: "Lee Rogerio",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "omgleemegablazer@hotmail.com",
      status: "active",
      age: 31,
    },
    {
      id: 5,
      username: "Hangman Adam Page",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "adampage@hotmail.com",
      status: "passive",
      age: 35,
    },

    {
      id: 5,
      username: "Gingerbread man",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "gb@hotmail.com",
      status: "active",
      age: 35,
    },



  ];