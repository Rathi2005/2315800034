// const express = require("express");

// const app = express();

// app.use(express.json());

// let users = [];

// app.post("/users", (req, res) => {
//   const { name, email } = req.body;

//   const user = {
//     id: Date.now(),
//     name,
//     email,
//   };

//   users.push(user);

//   res.status(201).json(user);
// });

// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });

//   res.json(user);
// });

// app.put("/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find((u) => u.id === id);

//   if (!user) {
//     return res.status(404).json({
//       message: "User not found",
//     });
//   }

//   user.name = req.body.name;
//   user.email = req.body.email;

//   res.json(user);
// });

// app.delete("/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   users = users.filter((u) => u.id !== id);

//   res.json({
//     message: "User deleted successfully",
//   });
// });

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const app = express();

app.use(express.json());

const users = [
    {
        "id" : 1,
        "name" : "Harshit",
    }
];

// get all users
app.get("/users",(req,res)=>{
    res.status(200).json(users);
})

app.post("/users",(req,res)=>{
    const { name } = req.body;

    const user = {
        "id": Date.now(),
        "name": name,
    }

    users.push(user);

    res.status(201).json(user);
})

// app.get("/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find((u) => u.id === id);

//   if (!user) {
//     return res.status(404).json({
//       message: "User not found",
//     });
//   }


app.get("/users/:id", (req,res)=>{
    const id = Number(req.params.id);

    const user = users.find((u) => u.id === id);
    res.status(200).json(user);
});

app.put("/users/:id",(req,res)=>{
    const id = Number(req.params.id);

    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    const { name } = req.body;
    user.name = name;

    res.json(user);
});

app.delete("/users/:id",(req,res)=>{
    const id = Number(req.params.id);

    const user = users.find((u)=> u.id===id);

    users.delete(user);

    res.status(200).json({
        "User deleted successfully": user,
    })
});

const port = 8080;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})