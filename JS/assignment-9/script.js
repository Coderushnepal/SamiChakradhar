const data = [
    {   
        id : 1,
        title: "i am sami",
        content: "hello",   
    },
    {
        id : 2,
        title: "i am i",
        content: "hello",   
    },
    {
        id : 3,
        title: "i sami",
        content: "hello",   
    },
];
data.map((dt) => {
    var whole_container = document.getElementsByClassName("box")[0];
    var container = document.getElementsByClassName("container")[0];
    var wrap = document.createElement("box");
    var h1 = document.createElement("h1");
    h1.innerHTML = dt.title;
    container.appendChild(h1);
    whole_container.appendChild(container);
   
    var h2 = document.createElement("h2");
    h2.innerHTML = dt.content;
    container.appendChild(h2);
    whole_container.appendChild(container);
    
});