import react from "react";
import ReactDOM from "react-dom";

export default function MyForm() {
  function order() {
    const name = document.getElementById("name").value;
    const colour = document.getElementById("colour").value;
    const size = document.getElementById("size").value;
    const cotton = document.getElementById("cotton").checked;
    const fabric = document.getElementById("fabric").checked;
    const quantity = document.getElementById("quantity").value;
    const instruction = document.getElementById("text").value;
    const sam = `<h2>Order for ${quantity} ${size}  ${colour}jeans pants(s)  ${
      cotton ? ` COTTON MATERIAL` : ` `
    } 
 ${fabric ? ` FABRIC MATERIAL` : ``}
 for ${name}</h2>
                <h1>Instructions: ${instruction}</h1>`;
    document.getElementById("root").innerHTML = sam;
  }
  return (
    <form>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqYZRkALe3Ube3lDGvGeBpjZgKcb1ysyXpA&usqp=CAU" />
      <h1>welcome to jeans world !</h1>
      <label>
        Name:
        <input type="text" id="name" />
      </label>
      <div>
        <label>
          Size:
          <select name="jeans" id="size">
            <option value="L SIZE">L SIZE</option>
            <option value="m SIZE">M SIZE</option>
            <option value="XL SIZE">XL SIZE</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          colour:
          <select name="jea" id="colour" class="col">
            <option value="BLUE">BLUE</option>
            <option value="BLACK">BLACK</option>
            <option value="GREY">GREY</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          cotton:
          <input type="checkbox" id="cotton" />
        </label>
      </div>
      <div>
        <label>
          fabric:
          <input type="checkbox" id="fabric" />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <label for="quantity"></label>
          <input type="number" id="quantity" name="quantity" />
        </label>
      </div>
      <div>
        <label>
          <p>Put Your Expectation:</p>
          <textarea id="text" name="container"></textarea>
        </label>
      </div>
      <button onClick={order}>Submit</button>
    </form>
  );
}
ReactDOM.render(<MyForm />, document.getElementById("root"));
