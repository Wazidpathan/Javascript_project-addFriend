var arr = [
  {
    name: "wazid",
    img: "https://images.unsplash.com/photo-1728412390619-1e819c6b98f9?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Strangers",
  },
  {
    name: "Arbaz",
    img: "https://images.unsplash.com/photo-1728412390582-68fa6922ce4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
    status: "Strangers",
  },
  {
    name: "Yashi",
    img: "https://plus.unsplash.com/premium_photo-1664299631876-f143dc691c4d?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Strangers",
  },
];
function print() {
  var clutter = "";

  arr.forEach(function (val, index) {
    clutter += `
    <div id="card">
      <div id="img">
        <img
          src="${val.img}"
          alt=""
        />
      </div>
      <h3>${val.name}</h3>
      <h5 id="${val.status}">${val.status}</h5>
      <button id="${index}" class = "${
      val.status === "Strangers" ? "blue" : "red"
    }">${val.status === "Strangers" ? "Add Friend" : "Remove Friend"} </button>
    </div>
  `;
  });

  document.querySelector("#main").innerHTML = clutter;
}
print();

document.querySelector("#main").addEventListener("click", function (details) {
  arr[details.target.id].status = "Friends";
  document.querySelector("#card h5").style.color = "green";
  document.querySelector("button").innerHTML = "Friends";

  print();
});
