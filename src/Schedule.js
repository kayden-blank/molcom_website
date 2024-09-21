import "./Schedule.css"
const Schedule = () =>{
    return (
      <form class="test">
        <div class="divBody">
         
          <p class="label"> Full Name(required)</p>
          <br></br>
          <input class="longInput"></input>
        </div>
        <div>
          <p class="label"> Company Email(required)</p>
          <br></br>
          <input class="longInput"></input>
        </div>
        <div>
          <p class="label">Phone(required)</p>
          <br></br>
          <input class="longInput"></input>
        </div>
        <div>
          <p class="label">Organization (required)</p>
          <br></br>
          <input class="longInput"></input>
        </div>
        <div>
         <p class="label"> Job Role(required)</p>
          <br></br>
          <input class="longInput"></input>
        </div>
        <div>
         <p class="label">
            {" "}
            What Recruitment and Assessment services are you interested
            in?(required)
          </p>
          <br></br>
          <input class="longInput"></input>
        </div>
        <div>
         <p class="label">
            {" "}
            Brief Overview of how we can be of help(required)
          </p>
          <br></br>
          {/* <input class="longInput"></input> */}
          <textarea class="textWidth"></textarea>
        </div>
        <div>
         <p class="label"> Company Size(required)</p>
          <br></br>
          <input class="longInput"></input>
        </div>
        <div>
          <input type="checkbox"></input>{" "}
          <label>
            I have read the Privacy Policy and agree to its terms.(required)
          </label>
        </div>
        <div>
          <input type="checkbox"></input>{" "}
          <label>
            I would like to recieve updates, tips, and offers via email
          </label>
        </div>
      </form>
    );
}
export default Schedule;