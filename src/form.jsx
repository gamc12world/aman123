export default function Form() {
  /*   const url = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d5abe89e");

  let x1 = url.then((e) => {
    let x1 = new ReadableStream(e.body);
    return x1;
  });
  x1.then((e) => {
    console.log(e);
  }); */
  return (
    <>
      <div className="main-cont">
        <div className="login-info">Please Sign-up</div>
        <div className="form">
          <form>
            <div className="first-name">
              <p className="fist-p">
                First:
                <input
                  name="First-name"
                  type="text"
                  placeholder="First-Name"
                  id="first-name1"
                  size={20}
                />
              </p>
            </div>
            <div className="last-name">
              <p className="fist-p">
                Last:
                <input type="text" placeholder="Last-name" id="last-name1" />
              </p>
            </div>
            <div className="gender">
              Male:
              <input type="radio" name="gender" value="Male" checked={true} />
              Female:
              <input type="radio" name="gender" value="Female" />
            </div>
            <div className="email">
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="pass">
              <input type="password" placeholder="password" />
            </div>
          </form>
        </div>
        <button className="click"> click</button>
      </div>
    </>
  );
}
