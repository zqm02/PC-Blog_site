import Mock from "mockjs";

Mock.mock("/api/banner","get",{
    code: 0,
    msg: "",
    data: [
            {
            id: "1",
            midImg: "https://images.pexels.com/photos/14643727/pexels-photo-14643727.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            bigImg: "https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_640.jpg",
            title: "lovely dog",
            description:"Ankara, Ankara, Turkey",
        },
        {
            id: "2",
            midImg: "https://images.pexels.com/photos/14643727/pexels-photo-14643727.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            bigImg: "https://cdn.pixabay.com/photo/2023/01/23/17/38/seagull-7739257_640.jpg",
            title: "landscape image",
            description:"Ankara, Ankara, Turkey",
        },
       {
            id: "3",
            midImg: "https://images.pexels.com/photos/14643727/pexels-photo-14643727.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            bigImg: "https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468__480.jpg",
            title: "landscape image",
            description:"Ankara, Ankara, Turkey",
        }
    ]
})