import React, { useState } from 'react'

const CreateProduct = (props) => {

    const[title,setTitle]=useState("");
    const[price,setPrice]=useState(0);
    const[description,setDescription]=useState("");
    const[category,setCategory]=useState("");
    const[image,setImage]=useState(props.data);
    const dataP = props.data;
    // const[select,setSelect]=useState("");
    // const[check,setCheck]=useState([]);
    // const[radio,setRadio]=useState("");

    // const handleCheckboxChange = (event) => {
    //     const { value, checked } = event.target;
    //     if (checked) {
    //       setCheck([...check, value]);
    //     } else {
    //       setCheck(check.filter((item) => item !== value));
    //     }
    //   };
    // const handelRadio =(event)=>{
    //     const {value,checked}=event.target;
    //     if(checked){
    //         setRadio(value);
    //     }else{
    //         setRadio("");
    //     }
    // }

      

  return (
    <>
          <form>
              <div className="form-row" autoComplete='off'>
                  <div className="form-group">
                      <label for="inputEmail4">title</label>
                      <input type="email" className="form-control" id="inputEmail4" autocomplete="off" onChange={e=>{setTitle(e.target.value)}} placeholder="Email"/>
                  </div><br />
                  <div className="form-group">
                      <label for="inputPassword4">price</label>
                      <input type="text" className="form-control" id="inputPassword4" autocomplete="off" onChange={e=>{setPrice(e.target.value)}} placeholder="Password"/>
                  </div>
              </div><br />
              <div className="form-group">
                  <label for="inputAddress">description</label>
                  <input type="text" className="form-control" id="inputAddress" autocomplete="off" onChange={e=>{setDescription(e.target.value)}} placeholder="1234 Main St"/>
              </div><br />
              <div className="form-group">
                  <label for="inputAddress2">Category</label>
                  <input type="text" className="form-control" id="inputAddress2" autocomplete="off" onChange={e=>{setCategory(e.target.value)}} placeholder="Apartment, studio, or floor"/>
              </div><br />
              {/* <div className="form-row">
                  <div className="form-group col-md-6">
                      <label for="inputCity">Image</label>
                      <input type="text" className="form-control" autocomplete="off" onChange={e=>{setImage(e.target.value)}} id="inputCity"/>
                  </div><br /> */}
                  {/* <div className="form-group col-md-4">
                      <label for="inputState">State</label>
                      <select id="inputState" onChange={e=>{setSelect(e.target.value)}} className="form-control">
                          <option selected>Choose...</option>
                          <option value="opt-1">opt-1</option>
                          <option value="opt-2">opt-2</option>
                          <option value="opt-3">opt-3</option>
                          <option value="opt-4">opt-4</option>
                          <option value="opt-5">opt-5</option>
                          <option value="opt-6">opt-6</option>
                      </select>
                  </div> */}
              {/* </div><br /> */}
              {/* <div className="form-group">
                <div className="row">
                    <div className="col-6">
                          <div className="form-check">
                              <input
                                  className="form-check-input"
                                  onClick={handleCheckboxChange}
                                  type="checkbox"
                                  value="Check box 1"
                              />
                              <label className="form-check-label" for="gridCheck">
                                  Check 1
                              </label>
                          </div>
                          <div className="form-check">
                              <input
                                  className="form-check-input"
                                  onClick={handleCheckboxChange}
                                  type="checkbox"
                                  value="Check box 2"
                              />
                              <label className="form-check-label" for="gridCheck">
                                  Check 2
                              </label>
                          </div>
                          <div className="form-check">
                              <input
                                  className="form-check-input"
                                  onClick={handleCheckboxChange}
                                  type="checkbox"
                                  value="Check box 3"
                              />
                              <label className="form-check-label" for="gridCheck">
                                  Check 3
                              </label>
                          </div>
                    </div>
                    <div className="col-6">
                        <input type="radio" name="radio" onClick={handelRadio} value="Check 1" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                                  Check 1
                        </label>
<br />
                        <input type="radio" name="radio" onClick={handelRadio} value="Check 2" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                                  Check 2
                        </label>
<br />
                        <input type="radio" name="radio" onClick={handelRadio} value="Check 3" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                                  Check 3
                        </label>
<br />
                    </div>
                </div>
              </div><br /> */}
              <button className="btn btn-primary">Sign in</button>
          </form>
          {/* <div>{title}</div>
          <div>{price}</div>
          <div>{description}</div>
          <div>{category}</div>
          <div>{select}</div>
          <div>{check}</div>
        <div>{radio}</div> */}
        <div>{image}</div>
    </>
  )
}

export default CreateProduct